//console.log('Hello online academy')

import express from "express";
import compression from "compression";
import cors from 'cors'
import { createServer } from "http";


const app= express();

app.use('*', cors());
app.use(compression());

app.get('/',(reg, res) => {
    res.send('Hello online academy');
});

const httpServer = createServer(app);

const PORT=5200;

httpServer.listen({
    port :PORT
    },
    ()=>console.log(`Hello world API GraphQL http://localhost:${PORT}`)
);