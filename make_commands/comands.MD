# Clear all containers
docker stop $(docker ps -a -q) & docker rm $(docker ps -a -q) --force & docker rmi $(docker images -a -q) --force & docker-compose up --build