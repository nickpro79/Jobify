import { Router } from "express";
const router = Router();
import { validateJobInput } from "../middleware/validationMiddleware.js";
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
  .get(GetSingleJobs)
  .patch(validateJobInput, UpdateJob)
  .delete(DeleteJob);

export default router;
