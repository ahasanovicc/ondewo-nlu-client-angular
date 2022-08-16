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
ONDEWO_NLU_VERSION = 2.9.0

NLU_API_GIT_BRANCH=tags/2.10.0
ONDEWO_PROTO_COMPILER_GIT_BRANCH=tags/2.0.0
ONDEWO_PROTO_COMPILER_DIR=src/ondewo-proto-compiler
NLU_APIS_DIR=src/ondewo-nlu-api
NLU_PROTOS_DIR=${NLU_APIS_DIR}/ondewo
GOOGLE_APIS_DIR=${NLU_APIS_DIR}/googleapis
GOOGLE_PROTOS_DIR=${GOOGLE_APIS_DIR}/google
NPM_USERNAME?=ENTER_HERE_YOUR_NPM_USERNAME
NPM_PASSWORD?=ENTER_HERE_YOUR_NPM_PASSWORD
GITHUB_GH_TOKEN?=
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
	npm run prettier:check --silent

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

release: create_release_branch create_release_tag
	@echo "Start Release"

gh_release: build_utils_docker_image release_to_github_via_docker_image

npm_release:
	@echo "Start NPM Release"
	cd src && npm run release && cd ..
	@echo "Finished NPM Release"




build_code: check_out_correct_submodule_versions build_compiler
	@echo "Start building"
	docker run -t -v ${PWD}/src:/input-volume -v ${PWD}:/output-volume ${IMAGE_UTILS_NAME} ondewo-nlu-api ondewo
	@echo "Finished building"

check_out_correct_submodule_versions:
	@echo "START checking out correct submodule versions ..."
	git submodule update --init --recursive
	git -C ${NLU_APIS_DIR} fetch --all
	git -C ${NLU_APIS_DIR} checkout ${NLU_API_GIT_BRANCH}
	git -C ${ONDEWO_PROTO_COMPILER_DIR} fetch --all
	git -C ${ONDEWO_PROTO_COMPILER_DIR} checkout ${ONDEWO_PROTO_COMPILER_GIT_BRANCH}
	@echo "DONE checking out correct submodule versions."

update_package:
	@sed -i "s/\"version\": \"[0-9]*.[0-9]*.[0-9]\"/\"version\": \"${ONDEWO_NLU_VERSION}\"/g" package.json

build_compiler:
	cd ${ONDEWO_PROTO_COMPILER_DIR}/angular && \
	sh build.sh . && \
	cd ../../..

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


release_to_github_via_docker_image:  ## Release to Github via docker
	docker run --rm \
		-e GITHUB_GH_TOKEN=${GITHUB_GH_TOKEN} \
		${IMAGE_UTILS_NAME} make push_to_gh

build_utils_docker_image:  ## Build utils docker image
	docker build -f Dockerfile.utils -t ${IMAGE_UTILS_NAME} .

spc: ## Checks if the Release Branch, Tag and Pypi version already exist
	$(eval filtered_branches:= $(shell git branch --all | grep "release/${ONDEWO_NLU_VERSION}"))
	$(eval filtered_tags:= $(shell git tag --list | grep "${ONDEWO_NLU_VERSION}"))
	@if test "$(filtered_branches)" != ""; then echo "-- Test 1: Branch exists!!" & exit 1; else echo "-- Test 1: Branch is fine";fi
	@if test "$(filtered_tags)" != ""; then echo "-- Test 2: Tag exists!!" & exit 1; else echo "-- Test 2: Tag is fine";fi
















########################################################
# OLD STUFF - DONT TOUCH ------------------------------------------

build: check_out_correct_submodule_versions copy_proto_files_all_submodules npm_run_build



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

