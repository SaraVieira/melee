const serialize = require('serialize-javascript');

const script = publicPath => url =>
  `<script src="${publicPath}${url}" charset="utf-8"></script>`;
const link = publicPath => href =>
  `<link rel="stylesheet" href="${publicPath}${href}">`;

const walkManifest = (manifest, predicate) =>
  Object.keys(manifest)
    .map(key => [].concat(manifest[key]))
    .reduce((a, b) => a.concat(b), [])
    .filter(Boolean)
    .filter(predicate);

module.exports = ({
  manifest,
  publicPath = '',
  body = '',
  dll = false,
  preloadedState = {},
}) =>
  `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
    ${walkManifest(manifest, file => file.endsWith('.css'))
    .map(link(publicPath))
    .join('\n')}
  </head>
  <body>
    <div id="app">${body}</div>
    <script>
      // WARNING: See the following for security issues around embedding JSON in HTML:
      // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
      window.__PRELOADED_STATE__ = ${serialize(preloadedState, {
    isJSON: true,
  })}
    </script>
    ${dll ? script(publicPath)(dll) : ''}
    ${manifest.vendors ? []
        .concat(manifest.vendors)
        .filter(file => file.endsWith('.js'))
        .map(script(publicPath))
        .join('\n') : ''}
    ${manifest.main ? []
        .concat(manifest.main)
        .filter(file => file.endsWith('.js'))
        .map(script(publicPath))
        .join('\n') : ''}
  </body>
</html>
`;
