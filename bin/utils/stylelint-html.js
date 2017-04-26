const replaceRuleLink = (text, rule) =>
  text.replace(
    rule,
    `<a href="https://stylelint.io/user-guide/rules/${rule}/">${rule}</a>`,
  );

const warning = warn =>
  `<li>
  <p>
    <span class="label label-${warn.severity === 'error' ? 'danger' : 'warning'}">${warn.severity === 'error' ? 'Error' : 'Warning'}</span>
    <strong>${warn.line}:${warn.column}</strong>
    <span>${replaceRuleLink(warn.text, warn.rule)}</span>
  </p>
</li>`;

const node = result =>
  `
  <li class="row ${result.warnings.length ? 'collapsable' : ''} alert alert-${result.errored ? 'danger' : 'success'} ">
    <div>
      <span class="badge">${result.warnings.length}</span>
      <strong>${result.source}</strong>
    </div>
    <ul class="error-list hidden">${result.warnings
    .map(warning)
    .join('\n')}</ul>
  </li>
`;

module.exports = results =>
  `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Stylelint Report</title>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
      <style>
        ul , li {
          margin: 0;
          padding: 0;
          list-style: none;
        }
        .collapsable { cursor: pointer; }
      </style>
    </head>
    <body>
      <header class="container"><h1>Stylelint Report</h1></header>
      <ul class="container">
        ${results.map(node).join('\n')}
      </ul>
      <script type="text/javascript">
      (function () {
        var hasParent = function(desiredClass, node) {
          var className = '';
          if (node === document) { return null; }
          className = node.getAttribute('class');
          if (className && className.indexOf(desiredClass) !== -1) { return node; }
          return hasParent(desiredClass, node.parentNode);
        };

        document.body.addEventListener('click', function (e) {
          var collapsable = hasParent('collapsable', e.target);
          if (collapsable) {
            collapsable
              .querySelector('.error-list')
              .classList
              .toggle('hidden');
          }
        });
      }())
      </script>
    </body>
  </html>

  `;
