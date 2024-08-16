import { Router } from "express";
import { addStudentController, createClassroom, createTaskController, deleteClassRoom, EditClassRoom, getTeacherClassrooms, removeStudentController } from "../controllers/teacherController.js";

const teacherRouter = Router();

teacherRouter.post("/:id/classrooms", createClassroom);
teacherRouter.post("/classrooms/:classroomId/students", addStudentController);
teacherRouter.delete("/classrooms/:classroomId/students/:studentId", removeStudentController);
teacherRouter.post("/classrooms/:classroomId/tasks", createTaskController); 
teacherRouter.get("/:teacherId/classrooms", getTeacherClassrooms);
teacherRouter.put("/classrooms/:classroomId", EditClassRoom);
teacherRouter.delete("/classrooms/:classroomId", deleteClassRoom);

export default teacherRouter;