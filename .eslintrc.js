module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "env": {
    "jest/globals": true
  },
  "plugins": [
    "react",
    "jsx-a11y",
    "import",
    "flowtype",
    "compat",
    "jest"
  ],
  "extends": [
    "plugin:flowtype/recommended",
    "plugin:jest/recommended"
  ],
  "rules": {
    "compat/compat": 2
  }
};
