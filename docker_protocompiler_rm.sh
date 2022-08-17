for container in $(docker container ls -a | grep ondewo-angular-proto-compiler | cut -c 1-13)
do
    docker container rm $container
    echo "$container \n ------"
done