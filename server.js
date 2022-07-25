import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import categoriesRouter from './src/routes/categoriesRouter.js'
import gamesRouter from './src/routes/gamesRouter.js'

dotenv.config();

const server = express();

server.use(cors());
server.use(express.json());

server.use(categoriesRouter);
server.use(gamesRouter);

server.listen(process.env.PORT, ()=>{
    console.log("Server running on port " + process.env.PORT)
});