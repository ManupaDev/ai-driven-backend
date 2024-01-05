import 'dotenv/config';
import express from 'express';
import { connectDB } from "./persistence/db.js";
import GlobalErrorHandlerMiddleware from './api/middleware/global-error-handling.js';

import jobsRouter from './api/jobs.js';

const app = express();
app.use(express.json());

await connectDB();

app.use("/api/jobs", jobsRouter);

app.use(GlobalErrorHandlerMiddleware);

app.listen(8000, () => console.log('Server is listening on port 8000.'));
