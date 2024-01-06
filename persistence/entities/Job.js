import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    questions: {
        type: [String],
        default: [
            'What is your name?',
            'Where were you born?',
            'What is your favorite color?',
        ],
    },
});

const Job = mongoose.model("Job", jobSchema);

export default Job;
