import { Router } from "express";
import authRouter from "./authRoutes.js";
import { isStudent, isTeacher, requireSignIn } from "../middleware/authMiddleware.js";
import teacherRouter from "./teacherRoutes.js";
import studentRouter from "./studentRoutes.js";

const router = Router();

router.use("/auth", authRouter);

router.use("/teachers", requireSignIn, isTeacher, teacherRouter);

router.use("/students", requireSignIn, isStudent, studentRouter);

router.get("/test", requireSignIn, isTeacher,(req, res) => {
  res.status(200).send({
    success: true,
    message: "You are authenticated",
  });
});

export default router;
