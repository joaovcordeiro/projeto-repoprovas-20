import { Router } from "express";
import * as authController from "../controllers/authController.js";
import { validateSchemaMiddleware } from "../middlewares/validateSchema.js";
import { userSchema } from "../schemas/userSchema.js";
import { signInSchema } from "../schemas/userSchema.js";

const authRouter = Router();

authRouter.post("/sign-up", validateSchemaMiddleware(userSchema), authController.signUp);
authRouter.post("/sign-in", validateSchemaMiddleware(signInSchema), authController.signIn);

export default authRouter;

