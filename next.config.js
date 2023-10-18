/** @type {import('next').NextConfig} */
module.exports = {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.(mp3)$/,
        use: {
          loader: "file-loader",
          options: {
            publicPath: "/_next/static/",
            outputPath: "static/",
            name: "[name].[ext]",
          },
        },
      });
  
      return config;
    },
  };
