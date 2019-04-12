FROM node:9.6-slim

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY ./package.json /app/package.json

RUN npm install

ADD ./ /app/

CMD npm run dev
