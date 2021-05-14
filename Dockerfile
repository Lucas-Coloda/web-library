FROM node:latest

WORKDIR /usr/app

COPY package*.json ./

RUN \
npm install -g nodemon \
&& npm install -g sequelize-cli \
&& npm install npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/node babel-plugin-module-resolver \
&& npm install

#emteste @babel/cli @babel/core @babel/plugin-transform-runtime @babel/preset-env babel-plugin-module-resolver \
#certo && npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/node babel-plugin-module-resolver \
COPY . .

EXPOSE 4000

CMD [ "npm", "start" ]
