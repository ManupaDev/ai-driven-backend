import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
});

const Job = mongoose.model("Job", jobSchema);

export default Job;