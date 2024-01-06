import JobApplication from "../../persistence/entities/JobApplication.js";

export const createJobApplication = async (req, res, next) => {
    try {
        const jobApplication = req.body;
        await JobApplication.create(jobApplication);
        return res.status(201).send();
    } catch (error) {
        next(error);
    }
};

export const getJobApplications = async (req, res, next) => {
    try {
        const jobApplications = await JobApplication.find();
        return res.status(200).json(jobApplications);
    } catch (error) {
        next(error);
    }
};
