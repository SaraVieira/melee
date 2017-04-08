const prefix = 'boilerplate';

module.exports = {
  prefix,
  port: 8080,
  statful: {
    dryRun: true,
    token: '',
    app: prefix,
    tags: { environment: 'default' },
  },
};
