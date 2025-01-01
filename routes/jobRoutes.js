import { Router } from "express";
const router = Router();
import {
  validateJobInput,
  validateIdParams,
} from "../middleware/validationMiddleware.js";
import {
  GetAllJobs,
  CreateJobs,
  GetSingleJobs,
  UpdateJob,
  DeleteJob,
} from "../controllers/jobController.js";

router.route("/").get(GetAllJobs).post(validateJobInput, CreateJobs);
router
  .route("/:id")
  .get(validateIdParams, GetSingleJobs)
  .patch(validateJobInput, validateIdParams, UpdateJob)
  .delete(validateIdParams, DeleteJob);

export default router;
