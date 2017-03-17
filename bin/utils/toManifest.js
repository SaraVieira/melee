// @flow

export type Manifest = {
  [entry: string]: {
    js: string,
    css?: string
  }
};

// @TODO convert webpack stats object to something simpler to use
module.exports = (stats): Manifest => {

};
