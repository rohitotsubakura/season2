require("dotenv").config()

module.exports = {
  env: {
    api_url: process.env.API_URL,
    api_key: process.env.API_KEY
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