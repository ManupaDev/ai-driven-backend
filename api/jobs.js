import express from "express";
import { createJob, getJobs } from "../application/features/jobs.js";

const jobsRouter = express.Router();
jobsRouter.route("/").post(createJob).get(getJobs);

export default jobsRouter;