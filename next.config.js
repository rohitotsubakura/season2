const axios = require('axios');

require("dotenv").config()

module.exports = {
  env: {
    api_url: process.env.API_URL,
    api_key: process.env.API_KEY,
    yt_api_url: process.env.YT_API_URL,
    yt_api_url_params: process.env.YT_API_URL_PARAMS,
    yt_api_key: process.env.YT_API_KEY
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
    },
    {
      test: /\.(mp3)/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: 'file-loader',
        },
      ],
    })

    return config
  }
}