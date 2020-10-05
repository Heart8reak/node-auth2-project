const express = require('express');
const helemt = require('helmet');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
	res.json({ API: 'the backend API is running ' });
});

modeule.exports = server;
