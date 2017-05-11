FROM node:6.10.1-alpine
LABEL maintainer "tvg-frontend@mindera.com"

ARG configuration

RUN mkdir -p /usr/opt/boilerplate
WORKDIR /usr/opt/boilerplate

COPY package.json .
COPY bin bin
COPY config config
COPY src src
COPY build build
COPY node_modules node_modules

EXPOSE 8080

CMD ["sh", "-c", "./bin/server --NODE_ENV=${ENVIRONMENT}"]
