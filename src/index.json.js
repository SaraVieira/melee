const serialize = require('serialize-javascript');

const script = publicPath => url =>
  `<script src="${publicPath}${url}" charset="utf-8"></script>`;

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

const getScripts = (dll, preloadedState, publicPath) => {
  const scripts = [
    `<script>
    window.__PRELOADED_STATE__ = ${serialize(preloadedState, { isJSON: true })}
    </script>`,
  ];

  if (dll) {
    scripts.push(script(publicPath)(dll));
  }

  return scripts;
};

module.exports = ({
  manifest,
  publicPath = '',
  body = '',
  dll = false,
  preloadedState = {},
}) => ({
  html: body,
  js: getJSFiles(manifest),
  css: walkManifest(manifest, file => file.endsWith('.css')),
  script: getScripts(dll, preloadedState, publicPath),
});
