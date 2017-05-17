const serialize = require('serialize-javascript');

const walkManifest = (manifest, predicate) =>
  Object.keys(manifest)
    .map(key => [].concat(manifest[key]))
    .reduce((a, b) => a.concat(b), [])
    .filter(Boolean)
    .filter(predicate);

const getJSFiles = manifest => {
  let files = [];

  if (manifest.vendors) {
    files = files.concat(manifest.vendors).filter(file => file.endsWith('.js'));
  }

  if (manifest.main) {
    files = files.concat(manifest.main).filter(file => file.endsWith('.js'));
  }

  return files;
};

module.exports = ({
  manifest,
  prefix,
  publicPath = '',
  body = '',
  preloadedState = {},
}) => ({
  html: `<div id="${prefix}">${body}</div>`,
  js: getJSFiles(manifest).map(file => `${publicPath}${file}`),
  css: walkManifest(manifest, file => file.endsWith('.css')).map(
    file => `${publicPath}${file}`
  ),
  scripts: [
    `window.__${prefix.toUpperCase()}__PRELOADED_STATE__ = ${serialize(
      preloadedState,
      {
        isJSON: true,
      }
    )}`,
  ],
});
