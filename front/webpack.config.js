const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  watch: true,
  // MEMO: DockerでLive Reloadを有効にするためにはオプションでポーリングを行うよう設定する必要がある
  // https://webpack.js.org/configuration/watch/
  // https://qiita.com/ayatas/items/e88064cebe6b3d893b0e
  watchOptions: {
    // MEMO: 最初の変更からここで設定した期間に行われた変更は1度の変更の中で処理が行われる
    aggregateTimeout: 200,
    // MEMO: ポーリングの間隔
    poll: 1000
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: path.resolve(__dirname, 'dist/index.html'),
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    open: true,
    port: 8080,
    host: '0.0.0.0',
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
}
