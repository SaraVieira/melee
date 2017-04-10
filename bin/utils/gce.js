/* eslint-disable comma-dangle */

const http = require('http');
const url = require('url');
const logger = require('./logger');

const options = Object.assign({},
  url.parse('http://metadata.google.internal/computeMetadata/v1/instance/zone'),
  { headers: { 'Metadata-Flavor': 'Google' } }
);

const request = () => new Promise((resolve) => {
  const req = http.request(options, (res) => {
    let data = '';
    res.setEncoding('utf8');
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
      const zone = data.split('/').pop();
      const region = `${zone.split('-')[0]}-${zone.split('-')[1]}`;
      resolve({ zone, region });
    });
  });

  req.on('error', () => resolve({ zone: 'default', region: 'default' }));
  req.end();
});

module.exports = request;
