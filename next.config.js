/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mp4$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "video",
          },
        },
      ],
    });

    return config;
  },
};
