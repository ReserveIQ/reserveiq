module.exports = function override(config, env) {
  if (env === 'production') {
    config.optimization.minimizer[0].options.terserOptions = {
      ...config.optimization.minimizer[0].options.terserOptions,
      keep_fnames: true,
      keep_classnames: true,
    };
  }
  return config;
};
