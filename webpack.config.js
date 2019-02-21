const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: path.resolve(__dirname, './src/index.ts'),
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js',
    library: '',
    libraryTarget: 'commonjs'
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },

  externals: [nodeExternals()],

  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ['@svgr/webpack']
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      { enforce: 'pre', test: /\.(ts|js)x?$/, loader: 'source-map-loader' }
    ]
  }
};
