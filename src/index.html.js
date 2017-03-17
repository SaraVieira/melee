// @flow

const toLinkTag = (url: string): string => `<link rel="stylesheet" href="${url}">`;
const toScriptTag = (url: string): string => `<script src="${url}" charset="utf-8"></script>`;


type HTMLParts = {
  title: string,
  manifest: Manifest,
  head: string,
  body: string,
};

export default ({ title, head, body, manifest }: HTMLParts): string => {
  const renderStyles = (entries: Manifest): string =>
    Object
    .keys(entries)
    .reduce((acc, key) => (entries[key].css ?
      acc.concat(toLinkTag(entries[key].css)) :
      acc
    ), '');

  return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>${title}</title>
    ${renderStyles(manifest)}
    ${head}
  </head>
  <body>
    <div id="root">${body}</div>
    ${toScriptTag(manifest.vendors.js)}
    ${toScriptTag(manifest.main.js)}
  </body>
</html>`;
};
