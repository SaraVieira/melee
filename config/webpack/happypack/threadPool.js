const os = require('os');
const HappyPack = require('happypack');

module.exports = HappyPack.ThreadPool({
  size: os.cpus().length - 1,
});
