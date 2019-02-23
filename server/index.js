const bodyParser = require('koa-bodyparser');
const config     = require('./webpack/webpack.config.dev.js');
const graphqlApi = require('./graphql');
const Koa        = require('koa');
const koaWebpack = require('koa-webpack');
const renderApp  = require('./renderApp');

const app = new Koa();

app.use(bodyParser());
app.use(graphqlApi());

koaWebpack({ config }).then((webpackMiddleware) => {
  app.use(webpackMiddleware);
  app.use(renderApp());
});

app.listen(3000);
