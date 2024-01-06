import Job from "../../persistence/entities/Job.js";

export const createJob = async (req, res, next) => {
    try {
        const job = req.body;
        await Job.create(job);
        return res.status(201).send();
    } catch (error) {
        next(error);
    }
};

export const getJobs = async (req, res, next) => {
    try {
        const jobs = await Job.find().select("title type location");
        return res.status(200).json(jobs);
    } catch (error) {
        next(error);
    }
};

export const getJobById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const jobs = await Job.findById(id)
        return res.status(200).json(jobs);
    } catch (error) {
        next(error);
    }
};

