import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

import Routes from './server/route.js';

const app = express();
app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/posts', Routes);


const URL = "mongodb+srv://mongodb:onqJUekXZGHVWB2r@cluster0.i9foyr2.mongodb.net/CRUDDEMO"
mongoose.connect(URL, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true })
.then(() => { 
   console.log('MongoDB connected successfully');
}).catch((error) => {
    console.log('Error:', error.message)
});

const port = process.env.PORT || 8080;

app.listen(port , () => console.log(`Server is running on port ${port}` ))
