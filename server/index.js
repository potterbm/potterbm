const bodyParser = require('koa-bodyparser');
const Koa = require('koa');
const graphqlApi = require('./graphql');
const renderApp = require('./renderApp');

const app = new Koa();

app.use(bodyParser());
app.use(graphqlApi());
app.use(renderApp());

app.listen(process.env.PORT || 3000);
