import express from 'express';
import{ Connection }  from './database/db.js';
import dotenv from 'dotenv';
import DefaultData from './default.js';
import { products } from './constants/Data.js';
import Cors from 'cors';
import bodyParser from 'body-parser';
import router from './Routes/route.js';

dotenv.config();

const app = express();

app.use(Cors());
app.use(bodyParser.json({ extended : true}))
app.use(bodyParser.urlencoded({ extended : true}))
app.use('/', router)

const Port= 8000;

const USERNAME= process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

// DefaultData();

Connection(USERNAME, PASSWORD);


app.listen(Port, ()=>{console.log(`running ${Port}`)});

