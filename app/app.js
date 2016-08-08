import webpack from 'webpack';
import webpackConfig from '../webpack.config';
import webpackDevMiddleware from 'webpack-dev-middleware';
import express from 'express';

const app = express();
const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  lazy: false,
  watchOptions: {
    aggregateTimeout: 300,
    poll: true
  },
  publicPath: webpackConfig.output.publicPath
}));

app.use(express.static('./public'));

app.get('/hello', function(req, res) {
  res.send('Hello, world!');
});

app.listen(3000, function() {
  console.log('Listening on 3000');
});