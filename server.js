import 'dotenv/config';
import express from 'express';
import { connectDB } from "./persistence/db.js";
import GlobalErrorHandlerMiddleware from './api/middleware/global-error-handling-middleware.js';
import cors from 'cors';
import cookieParser from "cookie-parser";
import jobsRouter from './api/jobs.js';
import jobApplicationsRouter from './api/jobApplications.js';

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors())

await connectDB();

app.use("/api/jobs", jobsRouter);
app.use("/api/jobApplications", jobApplicationsRouter);


app.use(GlobalErrorHandlerMiddleware);

app.listen(process.env.PORT, () => console.log('Server is listening...'));
