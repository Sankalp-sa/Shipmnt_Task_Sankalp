import { Router } from "express";
import { addStudentController, createClassroom, createTaskController, removeStudentController } from "../controllers/teacherController.js";

const teacherRouter = Router();

teacherRouter.post("/:id/classrooms", createClassroom);
teacherRouter.post("/classrooms/:classroomId/students", addStudentController);
teacherRouter.delete("/classrooms/:classroomId/students/:studentId", removeStudentController);
teacherRouter.post("/classrooms/:classroomId/tasks", createTaskController); 


export default teacherRouter;