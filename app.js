import 'dotenv/config';
import express from 'express';
import connectToDb from './database.js';
import cors from 'cors';
import userRouter from './routes/userRoute.js';

const app = express();

// Middleware to parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Initialize connection
connectToDb();

// Use the user routes
app.use('/', userRouter);

export default app;
