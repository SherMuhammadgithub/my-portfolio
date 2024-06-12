/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Add a rule to handle PDF files
    config.module.rules.push({
      test: /\.pdf$/,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "/_next/static/files", // Specify where the files will be moved
            outputPath: `${isServer ? "../" : ""}static/files/`, // Specify the output path
            name: "[name].[hash].[ext]", // Specify the filename pattern
            esModule: false, // Ensure compatibility with older loaders
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
