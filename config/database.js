import express from 'express';
import mongoose from 'mongoose';
import { config as configDotenv } from 'dotenv'; // Corrected import to use `config` from `dotenv`

configDotenv(); // Added this line to load environment variables

const dbconnect = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error connecting to the database');
        console.error(error.message);
    }
}

export default dbconnect;