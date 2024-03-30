import mongoose from "mongoose";

const jobApplicationSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  fullName: { type: String, required: true },
  job: { type: mongoose.Schema.Types.ObjectId, ref: "Job", required: true },
  answers: [String],
  rating: { type: String },
});

const JobApplication = mongoose.model("JobApplication", jobApplicationSchema);

export default JobApplication;
