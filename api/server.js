const jsonServer = require('json-server');
const express = require("express");
const path = require("path");
const { json } = require('body-parser');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.SERVER_PORT || 3006;

server.use("/", middlewares, router);

server.use(express.static(path.join(__dirname, "build")));
server.get("/*", (_req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

server.listen(port, () => console.log("Server running"));

module.exports = server;