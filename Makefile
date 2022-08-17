export

# ---------------- BEFORE RELEASE ----------------
# 1 - Update Version Number
# 2 - Update RELEASE.md
# 3 - make update_setup
# -------------- Release Process Steps --------------
# 1 - Get Credentials from devops-accounts repo
# 2 - Create Release Branch and push
# 3 - Create Release Tag and push
# 4 - GitHub Release
# 5 - PyPI Release

########################################################
# 		Variables
########################################################
ONDEWO_NLU_VERSION = 2.9.1

NLU_API_GIT_BRANCH=tags/2.10.0
ONDEWO_PROTO_COMPILER_GIT_BRANCH=tags/2.0.0
ONDEWO_PROTO_COMPILER_DIR=ondewo-proto-compiler
NLU_APIS_DIR=src/ondewo-nlu-api
NLU_PROTOS_DIR=${NLU_APIS_DIR}/ondewo
GOOGLE_APIS_DIR=${NLU_APIS_DIR}/googleapis
GOOGLE_PROTOS_DIR=${GOOGLE_APIS_DIR}/google
NPM_USERNAME?=ENTER_HERE_YOUR_NPM_USERNAME
NPM_PASSWORD?=ENTER_HERE_YOUR_NPM_PASSWORD
GITHUB_GH_TOKEN?=
NPM_AUTOMATION_TOKEN?=
IMAGE_UTILS_NAME=ondewo-nlu-client-utils-angular:${ONDEWO_NLU_VERSION}

CURRENT_RELEASE_NOTES=`cat RELEASE.md \
	| sed -n '/Release ONDEWO NLU Angular Client ${ONDEWO_NLU_VERSION}/,/\*\*/p'`


GH_REPO="https://github.com/ahasanovicc/ondewo-nlu-client-angular"
DEVOPS_ACCOUNT_GIT="ondewo-devops-accounts"
DEVOPS_ACCOUNT_DIR="./${DEVOPS_ACCOUNT_GIT}"
.DEFAULT_GOAL := help
########################################################
#       ONDEWO Standard Make Targets
########################################################

setup_developer_environment_locally: install_packages install_precommit_hooks

install_packages:
	npm i

install_precommit_hooks:
	npx husky install

prettier:
	node_modules/.bin/prettier --config .prettierrc --check --ignore-path .prettierignore ./

eslint:
	./node_modules/.bin/eslint .

TEST:	## Prints some important variables
	@echo "Release Notes: \n \n $(CURRENT_RELEASE_NOTES)"
	@echo "GH Token: \t $(GITHUB_GH_TOKEN)"
	@echo "NPM Name: \t $(NPM_USERNAME)"
	@echo "NPM Password: \t $(NPM_PASSWORD)"

help: ## Print usage info about help targets
	# (first comment after target starting with double hashes ##)
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' Makefile | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-40s\033[0m %s\n", $$1, $$2}'

makefile_chapters: ## Shows all sections of Makefile
	@echo `cat Makefile| grep "########################################################" -A 1 | grep -v "########################################################"`

########################################################
#       Repo Specific Make Targets
########################################################

release:
	@echo "Start Release"
	make build_and_publish_npm_via_docker
	make create_release_branch
	make create_release_tag
	make release_to_github_via_docker_image

gh_release: build_utils_docker_image release_to_github_via_docker_image

npm_release:
	@echo "Start NPM Release"
	npm publish ./npm --access public --dry-run
	@echo "Finished NPM Release"

update_package:
	@sed -i "s/\"version\": \"[0-9]*.[0-9]*.[0-9]\"/\"version\": \"${ONDEWO_NLU_VERSION}\"/g" package.json

create_release_branch: ## Create Release Branch and push it to origin
	git checkout -b "release/${ONDEWO_NLU_VERSION}"
	git push -u origin "release/${ONDEWO_NLU_VERSION}"

create_release_tag: ## Create Release Tag and push it to origin
	git tag -a ${ONDEWO_NLU_VERSION} -m "release/${ONDEWO_NLU_VERSION}"
	git push origin ${ONDEWO_NLU_VERSION}

login_to_gh: ## Login to Github CLI with Access Token
	echo $(GITHUB_GH_TOKEN) | gh auth login -p ssh --with-token

build_gh_release: ## Generate Github Release with CLI
	gh release create --repo $(GH_REPO) "$(ONDEWO_NLU_VERSION)" -n "$(CURRENT_RELEASE_NOTES)" -t "Release ${ONDEWO_NLU_VERSION}"

push_to_gh: login_to_gh build_gh_release
	@echo 'Released to Github'

build_compiler:
	cd ondewo-proto-compiler/angular && sh build.sh

release_to_github_via_docker_image:  ## Release to Github via docker
	docker run --rm \
		-e GITHUB_GH_TOKEN=${GITHUB_GH_TOKEN} \
		${IMAGE_UTILS_NAME} make push_to_gh

build_utils_docker_image:  ## Build utils docker image
	docker build -f Dockerfile.utils -t ${IMAGE_UTILS_NAME} .

build_and_publish_npm_via_docker: ##build build_utils_docker_image
	docker run --rm --user ${USER} \
		-e NPM_AUTOMATION_TOKEN=${NPM_AUTOMATION_TOKEN} \
		${IMAGE_UTILS_NAME} make docker_npm_release

docker_npm_release:
	@npm config set //registry.npmjs.org/:_authToken=${NPM_AUTOMATION_TOKEN}
	npm whoami
	make npm_release

########################################################
#		DEVOPS-ACCOUNTS

ondewo_release: spc clone_devops_accounts run_release_with_devops ## Release with credentials from devops-accounts repo
	@rm -rf ${DEVOPS_ACCOUNT_GIT}

clone_devops_accounts: ## Clones devops-accounts repo
	if [ -d $(DEVOPS_ACCOUNT_GIT) ]; then rm -Rf $(DEVOPS_ACCOUNT_GIT); fi
	git clone git@bitbucket.org:ondewo/${DEVOPS_ACCOUNT_GIT}.git

run_release_with_devops: #cat ${DEVOPS_ACCOUNT_DIR}/account_github.env | grep GITHUB_GH
	$(eval info:= $(shell echo GITHUB_GH_TOKEN=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 & cat ${DEVOPS_ACCOUNT_DIR}/account_npm.env | grep NPM_AUTOMATION_TOKEN ))
	make release $(info)

spc: ## Checks if the Release Branch, Tag and Pypi version already exist
	$(eval filtered_branches:= $(shell git branch --all | grep "release/${ONDEWO_NLU_VERSION}"))
	$(eval filtered_tags:= $(shell git tag --list | grep "${ONDEWO_NLU_VERSION}"))
	@if test "$(filtered_branches)" != ""; then echo "-- Test 1: Branch exists!!" & exit 1; else echo "-- Test 1: Branch is fine";fi
	@if test "$(filtered_tags)" != ""; then echo "-- Test 2: Tag exists!!" & exit 1; else echo "-- Test 2: Tag is fine";fi


########################################################
# Angular Build - Old Code

build: check_out_correct_submodule_versions build_compiler copy_proto_files_all_submodules npm_run_build
	@echo "################### PROMT FOR CHANGING FILE OWNERSHIP FROM ROOT TO YOU ##########################"
	@for f in `ls -la | grep root | cut -c 57-200`; \
	do \
		sudo chown `whoami`:`whoami` $$f && echo $$f; \
	done
	npm i eslint --save-dev
	npm i prettier --save-dev
	npm i @typescript-eslint/eslint-plugin --save-dev
	npm i husky --save-dev

check_out_correct_submodule_versions:
	@echo "START checking out correct submodule versions ..."
	git submodule update --init --recursive
	git -C ${NLU_APIS_DIR} fetch --all
	git -C ${NLU_APIS_DIR} checkout ${NLU_API_GIT_BRANCH}
	git -C ${ONDEWO_PROTO_COMPILER_DIR} fetch --all
	git -C ${ONDEWO_PROTO_COMPILER_DIR} checkout ${ONDEWO_PROTO_COMPILER_GIT_BRANCH}
	@echo "DONE checking out correct submodule versions."

copy_proto_files_all_submodules: copy_proto_files_for_google_api

copy_proto_files_for_google_api:
	@echo "START copying googleapis protos from submodules to build folder ..."
	# TODO optimize to only generate the google protos used in nlu
	# -mkdir -p ${NLU_APIS_DIR}/google/api
	# -mkdir -p ${NLU_APIS_DIR}/google/protobuf
	# cp ${GOOGLE_PROTOS_DIR}/api/annotations.proto ${NLU_APIS_DIR}/google/api/
	# cp ${GOOGLE_PROTOS_DIR}/protobuf/struct.proto ${NLU_APIS_DIR}/google/protobuf/
	# cp ${GOOGLE_PROTOS_DIR}/protobuf/empty.proto ${NLU_APIS_DIR}/google/protobuf/
	# cp ${GOOGLE_PROTOS_DIR}/protobuf/field_mask.proto ${NLU_APIS_DIR}/google/protobuf/
	@echo "DONE copying googleapis protos from submodules to build folder."

generate_protos:
	@echo "START generate protos ..."
	cp -r ${GOOGLE_PROTOS_DIR} ${NLU_APIS_DIR}
	#
	docker run -it \
		-v ${PWD}/src:/input-volume \
		-v ${PWD}/.:/output-volume \
		ondewo-angular-proto-compiler \
		ondewo-nlu-api ondewo
	#
	rm -rf ${NLU_APIS_DIR}/google
	@echo "DONE generate protos."

npm_run_build:
	@echo "START npm run build ..."
	cd src/ && npm run build && cd ..
	@echo "DONE npm run build."

publish-npm:
	@echo "START pushing release to npm ..."
	cd src/ && npm run publish-npm && cd ..
	@echo "DONE pushing release to npm."

submodule_update:
	@echo "START updating submodule ..."
	cd src/ && npm run submodule_update && cd ..
	@echo "DONE updating submodule."

test-in-ondewo-aim:
	@echo "START copying files to local AIM for testing ..."
	cd src/ && npm run test-in-ondewo-aim && cd ..
	@echo "DONE copying files to local AIM for testing."

