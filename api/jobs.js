import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";
import express from "express";
import {
  createJob,
  getJobById,
  getJobs,
} from "../application/features/jobs.js";
import AuthorizationMiddleware from "./middleware/authorization-middleware.js";

const jobsRouter = express.Router();
jobsRouter
  .route("/")
  .post(ClerkExpressRequireAuth({}), AuthorizationMiddleware, createJob)
  .get(getJobs);
jobsRouter.route("/:id").get(getJobById);

export default jobsRouter;
