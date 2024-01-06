import JobApplication from "../../persistence/entities/JobApplication.js";
import { generateRating } from "./../features/rating.js";

export const createJobApplication = async (req, res, next) => {
    try {
        const jobApplication = req.body;
        const createdJobApplication = await JobApplication.create(jobApplication);        
        generateRating(createdJobApplication._id);
        return res.status(201).send();
    } catch (error) {
        next(error);
    }
};

export const getJobApplications = async (req, res, next) => {
    try {
        const { jobId } = req.query;
        if (!jobId) {
            const jobApplications = await JobApplication.find().populate("job").exec();
            return res.status(200).json(jobApplications);
        }
        const jobApplications = await JobApplication.find({ job: jobId });
        return res.status(200).json(jobApplications);
    } catch (error) {
        next(error);
    }
};

export const getJobApplicationById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const jobApplication = await JobApplication.findById(id);
        return res.status(200).json(jobApplication);
    } catch (error) {
        next(error);
    }
};
