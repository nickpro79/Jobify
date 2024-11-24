import mongoose from "mongoose";

const JobSchema = mongoose.Schema(
  {
    company: String,
    postion: String,
    jobStatus: {
      type: String,
      enum: ["interview", "declined", "pending"],
      default: ["pending"],
    },
    jobType: {
      type: String,
      enum: ["full-time", "part-time", "internship"],
      default: ["full-time"],
    },
    jobLocation: {
      type: String,
      default: "my city",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Job", JobSchema);
