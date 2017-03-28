
![tvg-logo](https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/TVG_logo.svg/180px-TVG_logo.svg.png)

# TVG-Deposits

---

## Stack

| CSS                                                       | JavaScript                                 | Tools                                | Server                                                      | Container                                                       |
|-----------------------------------------------------------|--------------------------------------------|-------------------------------------|-------------------------------------------------------------|-----------------------------------------------------------------|
| [PostCSS](http://postcss.org/)                            | [Babel](https://babeljs.io/)               | [Webpack](https://webpack.js.org/)  | [Express](https://expressjs.com/)                           | [Docker](https://www.docker.com/)                               |
| [CSSnext](http://cssnext.io/)                             | [Flowtype](https://flowtype.org/)          | [Yarn](https://yarnpkg.com/) [*](#markdown-header-notes)| [Winston](https://github.com/winstonjs/winston)             | [node:6.9.10-alpine](https://hub.docker.com/_/node/)            |
| [css-modules](https://github.com/css-modules/css-modules) | [React](https://facebook.github.io/react/) |                                    | [Winston-GKE](https://github.com/dannydavidson/winston-gke) | [TVG-Cloud-SDK](https://bitbucket.org/betfair-us/tvg-cloud-sdk) |
| [stylelint](https://stylelint.io/)                        | [ESlint](http://eslint.org/)               |                                    |                                                             |                                                                 |
|                                                           | [Jest](https://facebook.github.io/jest/)   |                                    |                                                             |                                                                 |

## Notes

1. [Yarn](https://yarnpkg.com/): We're currently trialling it as an alternative to [npm](https://www.npmjs.com/) and this might change in the future.

Keep this updated, or send Merge Requests to include missing tools and/or configuration.
or else...

![](https://media.giphy.com/media/pjkngLDANouLm/giphy.gif)
