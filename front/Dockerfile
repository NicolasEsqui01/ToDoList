FROM node:alpine
WORKDIR /app/front
COPY ./package.json /app/front/package.json
COPY ./webpack.config.js /app/front/webpack.config.js
COPY . /app/front
RUN ["npm","install"]
CMD ["npm","run","dev"]