import { Router } from "express";
import { createClassroom } from "../controllers/teacherController.js";

const teacherRouter = Router();

teacherRouter.post("/:id/classrooms", createClassroom);

export default teacherRouter;