import express from 'express';

const server = express();

server.use(express.static('build/client'));

server.listen(3000, () => console.log('Listening on 3000'));
