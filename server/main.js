import express from 'express';
import { SERVER_CFG } from '../config/server.config';
import Home from './home/home';
import cors from 'cors';

const server = express();
server.use(cors());

// Init modules
Home(server);

server.listen(SERVER_CFG.port);