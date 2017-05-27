FROM node:6.10.1-alpine

ARG configuration

RUN mkdir -p /usr/opt/melee
WORKDIR /usr/opt/melee

COPY package.json .
COPY bin bin
COPY config config
COPY src src
COPY build build
COPY node_modules node_modules

EXPOSE 8080

CMD ["sh", "-c", "./bin/server"]
