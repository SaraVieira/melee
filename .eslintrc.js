module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "airbnb",
    "plugin:flowtype/recommended",
    "plugin:jest/recommended"
  ],
  "env": {
    "browser": true,
    "node": true,
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
  "rules": {
    "compat/compat": 2,
    "import/no-extraneous-dependencies": ["error", {"devDependencies": ["*.js", "**/*.spec.js", "config/**/*.js", "bin/*"]}]
  }
};
