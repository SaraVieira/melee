const prefix = 'boilerplate';

module.exports = {
  prefix,
  title: 'TVG React Boilerplate',
  port: 8080,
  publicPath: `/${prefix}/`, // Path used to prefix assets
  statful: {
    dryRun: true,
    token: '',
    app: prefix,
    tags: { environment: 'default' },
  },
};
