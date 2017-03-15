// @flow

const styleChunks = (chunk: string): boolean => chunk.endsWith('.css');
const javascriptChunks = (chunk: string): boolean => chunk.endsWith('.js');

const toLinkTag = (url: string): string => `<link rel="stylesheet" href="${url}">`;
const toScriptTag = (url: string): string => `<script src="${url}" charset="utf-8"></script>`;

export default (body: string, chunks: string[]): string => `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
    ${chunks.filter(styleChunks).map(toLinkTag).join('\n')}
  </head>
  <body>
    <div class="root">${body}</div>
    ${chunks.filter(javascriptChunks).map(toScriptTag).join('\n')}
  </body>
</html>`;
