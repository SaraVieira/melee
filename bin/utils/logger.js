const winston = require('winston');
const winstonGKE = require('winston-gke');
const winstonExpress = require('express-winston');

const isProduction = process.env.NODE_ENV === 'production';

const winstonInstance = isProduction ?
    winstonGKE(new winston.Logger()) :
    new winston.Logger({
      transports: [
        new winston.transports.Console({
          json: isProduction,
          colorize: false,
        }),
      ],
    });

const expressFormat = !isProduction;
const colorize = !isProduction;

module.exports = winstonInstance;

module.exports.request = winstonExpress.logger({
  winstonInstance,
  expressFormat,
  colorize,
  meta: false
});

module.exports.requestError = winstonExpress.errorLogger({
  winstonInstance,
  expressFormat,
  colorize,
});
