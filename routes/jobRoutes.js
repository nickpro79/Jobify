import { Router } from "express";
const router = Router();

import {
  GetAllJobs,
  CreateJobs,
  GetSingleJobs,
  UpdateJob,
  DeleteJob,
} from "../controllers/jobController.js";

router.route("/").get(GetAllJobs).post(CreateJobs);
router.route("/:id").get(GetSingleJobs).patch(UpdateJob).delete(DeleteJob);

export default router;
