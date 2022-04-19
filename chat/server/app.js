const express = require('express');
const app = express();
const server = require('http').createServer(app);
const PORT = 30010;

require('./io.js')(server);

server.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
