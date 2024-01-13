import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";
import express from "express";
import {
  createJobApplication,
  getJobApplicationById,
  getJobApplications,
} from "../application/features/jobApplications.js";
import AuthorizationMiddleware from "./middleware/authorization-middleware.js";

const jobApplicationsRouter = express.Router();
jobApplicationsRouter
  .route("/")
  .post(ClerkExpressRequireAuth({}), createJobApplication)
  .get(
    ClerkExpressRequireAuth({}),
    AuthorizationMiddleware,
    getJobApplications
  );
jobApplicationsRouter
  .route("/:id")
  .get(
    ClerkExpressRequireAuth({}),
    AuthorizationMiddleware,
    getJobApplicationById
  );

export default jobApplicationsRouter;
