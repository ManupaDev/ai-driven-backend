import express from "express";
import { createJobApplication, getJobApplications } from "../application/features/jobApplications.js";

const jobApplicationsRouter = express.Router();
jobApplicationsRouter.route("/").post(createJobApplication).get(getJobApplications);

export default jobApplicationsRouter;