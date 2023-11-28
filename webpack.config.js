const path = require('path');
const fs = require("fs");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const scssFiles = fs.readdirSync("./src").filter(function (file) {
  return file.match(/.*\.scss$/);
});
const scssEntries = scssFiles.map((filename) => {
  const filenameWithoutExtension = filename.replace(/\.[^/.]+$/, "");
  const entryName = `style_` + filenameWithoutExtension;
  return { [entryName]: "./src/" + filename };
});

module.exports = {
  entry: {
    index: path.resolve(__dirname, 'src') + '/index.js',
    ...Object.assign({}, ...scssEntries),
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(sc|sa|c)ss/,
        use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: { importLoaders: 1 },
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [
                    [
                      "autoprefixer",
                    ],
                  ],
                },
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              }
            },
          ],
          include: [path.resolve(__dirname, "src/styles")],
      }
]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/index.css'
    }),
  ],
  devServer: {
    client: {
      overlay: {
        errors: true,
        warnings: false,
        runtimeErrors: true,
      },
    },
    compress: true,
    open: true,
    port: 9000,
    static: false,
    watchFiles: ['./src/*'],
  },
  mode: "production",
};