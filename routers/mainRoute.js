import { Router } from "express";
import authRouter from "./authRoutes.js";
import { isTeacher, requireSignIn } from "../middleware/authMiddleware.js";

const router = Router();

router.use("/auth", authRouter);

router.get("/test", requireSignIn, isTeacher,(req, res) => {
  res.status(200).send({
    success: true,
    message: "You are authenticated",
  });
});

export default router;
