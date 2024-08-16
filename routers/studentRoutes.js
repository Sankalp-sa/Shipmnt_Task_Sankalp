import { Router } from "express";
import { submitTask, viewClassrooms, viewTasks, viewTaskStatus } from "../controllers/studentController.js";

const studentRouter = Router();

studentRouter.get("/:studentId/classrooms", viewClassrooms);
studentRouter.get("/:studentId/classrooms/:classroomId/tasks", viewTasks);
studentRouter.post("/:studentId/classrooms/:classroomId/tasks/:taskId", submitTask);
studentRouter.get("/:studentId/classrooms/:classroomId/tasks/:taskId/submissions", viewTaskStatus);

export default studentRouter;