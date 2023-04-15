const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.SERVER_PORT || 3006;

server.use("/", middlewares, router);

server.listen(port, () => console.log("Server running"));

module.exports = server;