const config = {
  entry: `${__dirname}/src/app.js`,
  output: {
    path: `${__dirname}/public/js`,
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: ['babel-loader'],
        query: {
          presets ['latest', 'stage-0', 'react']
        }
      }
    ]
  }
};

module.exports = config;
