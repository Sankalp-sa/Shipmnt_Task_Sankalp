import { Router } from "express";
import { viewClassrooms } from "../controllers/studentController.js";

const studentRouter = Router();

studentRouter.get("/:studentId/classrooms", viewClassrooms);

export default studentRouter;