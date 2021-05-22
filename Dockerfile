FROM node:latest

WORKDIR /usr/app

COPY package*.json ./

RUN ./init

COPY . .

EXPOSE 4000

CMD [ "npm", "start" ]
