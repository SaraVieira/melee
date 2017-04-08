FROM node:6.10.1-alpine
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
CMD ["npm", "run", "server:prod", "--", "--NODE_ENV=${ENVIRONMENT}"]
