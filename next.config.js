module.exports = {
  reactStrictMode: true,
  webpackDevMiddleware: (config) => {
    // adding this config to ensure file changes inside containers are reflected asap ~ 300ms
    config.watchOptions.poll = 300;
    return config;
  },
};
