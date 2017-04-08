const winston = require('winston');
const winstonGKE = require('winston-gke');
const winstonExpress = require('express-winston');
/**
 * @params {Boolean} [json=false] Log in simple mode or JSON mode
 */
module.exports = ({ json }) => {
  const colorize = !json;
  const expressFormat = !json;
  const meta = json;

  const winstonInstance = json ?
      winstonGKE(new winston.Logger()) :
      new winston.Logger({
        transports: [new winston.transports.Console({ json, colorize })],
      });

  winstonInstance.request = winstonExpress.logger({
    winstonInstance,
    expressFormat,
    colorize,
    meta,
  });

  winstonInstance.requestError = winstonExpress.errorLogger({
    winstonInstance,
    expressFormat,
    colorize,
    meta,
  });

  return winstonInstance;
};
