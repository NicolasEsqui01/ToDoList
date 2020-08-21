FROM node:alpine
WORKDIR /app 
COPY ./package.json /app/package.json
COPY ./app.js  /app/app.js
COPY . /app
RUN npm install 
CMD ["npm","start"]