import { StatusCodes } from "http-status-codes";
import Job from "../models/JobModel.js";
import { NotFoundError } from "../errors/customErrors.js";

export const GetAllJobs = async (req, res) => {
  const jobs = await Job.find({});
  res.status(StatusCodes.OK).json({ jobs });
};

export const CreateJobs = async (req, res) => {
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

export const GetSingleJobs = async (req, res) => {
  const { id } = req.params;
  const job = await Job.findById(id);
  if (!job) throw new NotFoundError(`no job with id ${id}`);
  res.status(StatusCodes.OK).json({ job });
};

export const UpdateJob = async (req, res) => {
  const { id } = req.params;

  const updatedJob = await Job.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  if (!updatedJob) {
    return res.status(404).json({ msg: `no job with id ${id}` });
  }

  res.status(StatusCodes.OK).json({ job: updatedJob });
};

export const DeleteJob = async (req, res) => {
  const { id } = req.params;
  const removedJob = await Job.findByIdAndDelete(id);
  if (!removedJob) {
    return res.status(404).json({ msg: `no job with id ${id}` });
  }

  res.status(StatusCodes.OK).json({ msg: "job deleted", job: removedJob });
};
