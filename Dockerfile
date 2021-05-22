FROM node:latest

WORKDIR /usr/app

COPY package*.json ./

COPY init.sh ./

USER root
RUN su root ./init.sh

COPY . .

EXPOSE 4000

CMD [ "yarn", "dev" ]
