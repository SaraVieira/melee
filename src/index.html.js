// @flow

const toLinkTag = (url: string): string => `<link rel="stylesheet" href="${url}">`;
const toScriptTag = (url: string): string => `<script src="${url}" charset="utf-8"></script>`;

export type Manifest = {
  [entry: string]: {
    js: string,
    css: string
  }
}

type HTMLParts = {
  title: string,
  manifest: Manifest,
  head: string,
  body: string,
}

export default ({ title, head, body, manifest }: HTMLParts): string =>
`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>${title}</title>
    ${toLinkTag(manifest.main.css)}
    ${head}
  </head>
  <body>
    <div id="root">${body}</div>
    ${toScriptTag(manifest.vendors.js)}
    ${toScriptTag(manifest.main.js)}
  </body>
</html>`;
