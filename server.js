import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import categoriesRouter from './src/routes/categoriesRouter.js'
import gamesRouter from './src/routes/gamesRouter.js'
import customersRouter from './src/routes/customersRouter.js'
import rentalsRouter from './src/routes/rentalsRouter.js'

dotenv.config();

const server = express();

server.use(cors());
server.use(express.json());

server.use(categoriesRouter);
server.use(gamesRouter);
server.use(customersRouter);
server.use(rentalsRouter);

server.listen(process.env.PORT, ()=>{
    console.log("Server running on port " + process.env.PORT)
});