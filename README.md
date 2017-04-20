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

1. Create your repository on bitbucket.
1. Clone this repository: `git clone git@bitbucket.org:betfair-us/tvg-react-boilerplate tvg-<your-new-app>`
1. `cd tvg-<your-new-app>`
1. Change the origin remote to point to your repository: `git remote set-url origin git@bitbucket.org:betfair-us/tvg-<your-new-app>`
1. If you wish to receive updates from future changes on the boilerplate. Add a new remote to point to this project: `git remote add boilerplate git@bitbucket.org:betfair-us/tvg-react-boilerplate`
1. `yarn install`

## You should be aware

* This boilerplate is opinionated.
* If you're building a service instead of a React Application, this might be a little overkill.
* This is a work in progress and there's a lot of room to improve. If you have ideas, open an Issue in bitbucket.

## Goodies

* Server-Side Render with Hot-Module Replacement (in development mode: `yarn start:dev`)
* Reports. Most commands create reports in the `reports` folder.
* Cache. If it can be cached, then is cached. You can see that in the `.tmp` folder
* DLL Support. All vendors are split in a DLL bundle.

## Basic Commands

  | Command          | Description  |
  |:-----------------|:-------------|
  | `yarn start`     | Create an optimized bundle and serve with the production server.  |
  | `yarn start:dev` | Create an development bundle and serve with the development server. |
  | `yarn build:dll` | Bundle external dependencies into a static bundle to ensure fast Webpack builds.  |
  | `yarn test`      | Run quality code tools (Flowtype, ESlint and Jest)  |
  | `yarn eslint`    | Run ESlint checker  |
  | `yarn flow`      | Run Flowtype checker  |
  | `yarn jest`      | Run tests with Jest  |

There are more commands available that you can check in the scripts section of your `package.json` file.

## NPM Repository

We use a private npm registry powered by nexus.

It's address is: [http://registry-npm.tvg.com/](http://registry-npm.tvg.com/),
and you can login with your TVG Eng account.

For you to be able to use this registry, you'll need to set up some npm configuration first.

1. Create a `.npmrc` file in your home folder. e.g.: `touch ~/.npmrc`
1. Run the following commands to fill in the `~/.npmrc` (Replace with your information):

    `echo "email=your.email@mindera.com" >> ~/.npmrc`  
    `echo "#registry=http://npm-registry.tvg.com/repository/npm/" >> ~/.npmrc`  
    `echo "_auth=$(echo -n 'username:password' | openssl base64)" >> ~/.npmrc`  

Each project has a local `.npmrc` file stating the registry url, this is for
your convenience, since this allows you to use the official npmjs registry outside
of TVG Project folders.

The local `.npmrc` file should set our nexus registry url and state that it
should always authenticate with the server e.g.:

  `echo "registry=http://npm-registry.tvg.com/repository/npm/" > .npmrc`  
  `echo "always-auth=true" >> .npmrc`

If you have intentions of publishing your application into the registry,
you need to set up your `package.json` to point to the correct registry (instead of the official one).

For that you need to add the following property to the `package.json`:

```JavaScript
"publishConfig": {
  "registry": "http://npm-registry.tvg.com/repository/npm_internal/"
},
```

## Configuration Files

Configuration is loaded with [node-config](https://github.com/lorenwest/node-config).
Which means that you should read its documentation.

However the tl;dr version is this:

Configuration files are loaded according to the `NODE_ENV` variable,
has is usual with nodejs apps.

However, since our stack uses the `ENVIRONMENT` variable to let applications
know the current environment. We must tell the server that
`NODE_ENV=${ENVIRONMENT}`. This is taken care in the Docker image.

If the environment variable is not set, then the `default.js` file is used, this is also
our "master" configuration file.

You should also be aware that configuration files cascade, which means that you
only need to override the default properties on a per environment basis.

## Notes

1. [Yarn](https://yarnpkg.com/): We're trialling it as an alternative to [npm](https://www.npmjs.com/) and this might change in the future.

Keep this updated, or send Merge Requests to include missing tools and/or configuration.
or else...

![](https://media.giphy.com/media/pjkngLDANouLm/giphy.gif)
