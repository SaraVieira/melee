FROM node:6.10.1-slim
ARG configuration

RUN mkdir -p /usr/opt/gtm
WORKDIR /usr/opt/gtm

COPY package.json

COPY node_modules node_modules
COPY config/server config/server

EXPOSE 8080
CMD ["npm", "start"]
