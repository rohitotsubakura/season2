module.exports = {
  env: {
    api_key: process.env.api_key
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(png|svg)/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: 'url-loader',
        },
      ],
    })

    return config
  },
}