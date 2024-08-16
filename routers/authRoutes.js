import { Router } from "express";
import { loginController, registerController } from "../controllers/authController.js";

const authRouter = Router();

authRouter.post("/register", registerController);

// LOGIN || method: POST
authRouter.post("/login", loginController);


export default authRouter;