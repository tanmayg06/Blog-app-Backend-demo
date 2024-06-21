import express from 'express';
import dbconnect from './config/database.js';
import { config as configDotenv } from 'dotenv';
import blog from './routes/blog.js';

const app = express();

const PORT = process.env.PORT || 3000;

// middleware 
app.use(express.json());



// mount 
app.use("/api/v1",blog);


dbconnect();

// Start Server 
app.listen(PORT,()=>{
    console.log("App is Running at the",PORT);
})

// Default Route 
app.get('/', (req,res) => {
    res.send(`<h1>HomePage</h1>`)
})

