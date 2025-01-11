import { Router } from "express";
import { register, login } from "../controllers/authController.js";
const router = Router();

import { validateRegisterUser } from "../middleware/validationMiddleware.js";

router.post("/register", validateRegisterUser, register);
router.post("/login", login);

export default router;
