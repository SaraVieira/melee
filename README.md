# TVG-React-Boilerplate

![Skeletor Mirror Exit](http://i.imgur.com/KEN2jpA.gif)

---

## Stack

| CSS                                                       | JavaScript                                 | Tools                                | Server                                                      | Container                                                       |
|-----------------------------------------------------------|--------------------------------------------|-------------------------------------|-------------------------------------------------------------|-----------------------------------------------------------------|
| [PostCSS](http://postcss.org/)                            | [Babel](https://babeljs.io/)               | [Webpack](https://webpack.js.org/)  | [Express](https://expressjs.com/)                           | [Docker](https://www.docker.com/)                               |
| [CSSnext](http://cssnext.io/)                             | [Flowtype](https://flowtype.org/)          | [Yarn](https://yarnpkg.com/) [*](#markdown-header-notes)| [Winston](https://github.com/winstonjs/winston)             | [node:6.9.10-alpine](https://hub.docker.com/_/node/)            |
| [css-modules](https://github.com/css-modules/css-modules) | [React](https://facebook.github.io/react/) |                                    | [Winston-GKE](https://github.com/dannydavidson/winston-gke) | [TVG-Cloud-SDK](https://bitbucket.org/betfair-us/tvg-cloud-sdk) |
| [stylelint](https://stylelint.io/)                        | [ESlint](http://eslint.org/)               |                                    |                                                             |                                                                 |
|                                                           | [Jest](https://facebook.github.io/jest/)   |                                    |                                                             |                                                                 |

## How to use this repository

1. Create your repository on bitbucket, in order to get a git url.
1. Clone this repository: `git clone git@bitbucket.org:betfair-us/tvg-react-boilerplate tvg-<your-new-app>`
1. `cd tvg-<your-new-app>`
1. Change the origin remote to point to your repository: `git remote set-url origin git@bitbucket.org:betfair-us/tvg-<your-new-app>`
1. If you wish to receive updates from future changes on the boilerplate. Add a new remote to point to this project: `git remote add boilerplate git@bitbucket.org:betfair-us/tvg-react-boilerplate`
1. `yarn install`

## Notes

1. [Yarn](https://yarnpkg.com/): We're currently trialling it as an alternative to [npm](https://www.npmjs.com/) and this might change in the future.

Keep this updated, or send Merge Requests to include missing tools and/or configuration.
or else...

![](https://media.giphy.com/media/pjkngLDANouLm/giphy.gif)
