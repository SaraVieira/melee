FROM node:5.12
ARG configuration

RUN mkdir -p /usr/opt/gtm
WORKDIR /usr/opt/gtm

COPY package.json /usr/opt/gtm

COPY node_modules node_modules
COPY config/server config/server

EXPOSE 8080
CMD ["npm", "start"]
