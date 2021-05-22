# Rebuild all containers and images
docker stop $(docker ps -a -q) & docker rm $(docker ps -a -q) --force & docker rmi $(docker images -a -q) --force & docker-compose up --build

# Clear all containers and images
docker stop $(docker ps -a -q) & docker rm $(docker ps -a -q) --force & docker rmi $(docker images -a -q) --force

# Get into bash container by docker-compose
docker-compose run serviceName /bin/bash

# Get into bash container
docker exec -it containerId /bin/bash

# Check resource usage of all containers
docker stats

# Copy something inside a docker container 
docker cp containerId:inputScrInsideContainer outputSrcInYourMachine

# Simple docker-compose build
docker-compose up --build --quiet-pull --no-start

# Run all services in background without cache 
docker-compose up --quiet-pull --force-recreate -d

# Check docker-compose logs follow with timestamps
docker-compose logs -f -t
