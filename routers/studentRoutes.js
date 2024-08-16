import { Router } from "express";
import { viewClassrooms, viewTasks } from "../controllers/studentController.js";

const studentRouter = Router();

studentRouter.get("/:studentId/classrooms", viewClassrooms);
studentRouter.get("/:studentId/classrooms/:classroomId/tasks", viewTasks);

export default studentRouter;