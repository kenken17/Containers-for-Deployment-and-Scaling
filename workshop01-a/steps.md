# Steps

## Create Network
``sh
docker network create workshop01-network
``

## Create Volume
``sh
docker volume create workshop01-volume
``

## Run the DB container
``sh
docker run -d -v workshop01-volume:/var/lib/mysql --name workshop01-db --network workshop01-network stackupiss/northwind-db:v1
``

## Run the APP container on port 3000
``sh
docker run -d -p 3000:3000 -e INSTANCE_IP_ADDRESS ???? -e DB_HOST=workshop01-db -e DB_USER=root -e DB_PASSWORD=changeit --name workshop01-app --network workshop01-network stackupiss/northwind-app:v1
``

## Run the APP v2 container on port 3001
``sh
docker run -d -p 3000:3000 -e INSTANCE_IP_ADDRESS ???? -e DB_HOST=workshop01-db -e DB_USER=root -e DB_PASSWORD=changeit --name workshop01-app --network workshop01-network stackupiss/northwind-app:v1
``
