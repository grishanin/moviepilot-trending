var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(3000, 'dev.moviepilot.com', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at dev.moviepilot.com:3000');
});
