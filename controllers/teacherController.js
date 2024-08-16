import classRoom from "../models/classRoomModel.js";
import task from "../models/taskModel.js";

export const createClassroom = async (req, res) => {

    try {

        const { classroomName } = req.body;
        
        const classroomData = await classRoom.findOne({ classroomName: classroomName, teacher: req.body.userId });

        if (classroomData) {
            return res.status(400).send({
                success: false,
                message: "Classroom already exists",
            });
        }

        const newClassroom = new classRoom({
            classroomName,
            teacher: req.body.userId,
        });

        const result = await newClassroom.save();

        return res.status(200).send({
            success: true,
            message: "Classroom created successfully",
            classroomId: result._id,
            classroomName: result.classroomName,
        });
        
    } catch (error) {
        
        return res.status(500).send({
            success: false,
            message: "Internal Server Error",
            error: error.message,
        });

    }    

};

export const addStudentController = async (req, res) => {

    try {

        const { studentId } = req.body;

        const classroomData = await classRoom.findOne({ _id: req.params.classroomId });

        if (!classroomData) {
            return res.status(400).send({
                success: false,
                message: "Classroom does not exist",
            });
        }

        if (classroomData.teacher.toString() !== req.body.userId) {
            return res.status(400).send({
                success: false,
                message: "Unauthorized! you are not the owner of the classroom",
            });
        }

        const studentExists = classroomData.students.includes(studentId);

        if (studentExists) {
            return res.status(400).send({
                success: false,
                message: "Student is already added to the classroom",
            });
        }

        classroomData.students.push(studentId);

        await classroomData.save();

        return res.status(200).send({
            success: true,
            message: "Student added successfully",
        });

        
    } catch (error) {
        
        return res.status(500).send({
            success: false,
            message: "Internal Server Error",
            error: error.message,
        });

    }

};

export const removeStudentController = async (req, res) => {

    try {

        const { studentId } = req.params;

        const classroomData = await classRoom.findOne({ _id: req.params.classroomId });

        if (!classroomData) {
            return res.status(400).send({
                success: false,
                message: "Classroom does not exist",
            });
        }

        if (classroomData.teacher.toString() !== req.body.userId) {
            return res.status(400).send({
                success: false,
                message: "Unauthorized! you are not the owner of the classroom",
            });
        }

        classroomData.students.pull(studentId);

        await classroomData.save();

        return res.status(200).send({
            success: true,
            message: "Student removed successfully",
        });

        
    } catch (error) {
        
        return res.status(500).send({
            success: false,
            message: "Internal Server Error",
            error: error.message,
        });

    }

};

export const createTaskController = async (req, res) => {

    try {

        const { title, description, dueDate } = req.body;

        const classroomData = await classRoom.findOne({ _id: req.params.classroomId });

        if (!classroomData) {
            return res.status(400).send({
                success: false,
                message: "Classroom does not exist",
            });
        }

        if (classroomData.teacher.toString() !== req.body.userId) {
            return res.status(400).send({
                success: false,
                message: "Unauthorized"
            });
        }

        const newTask = new task({
            title,
            description,
            dueDate,
            classroom: req.params.classroomId,
        });

        const result = await newTask.save();

        classroomData.tasks.push(result._id);

        await classroomData.save();

        return res.status(200).send({
            success: true,
            message: "Task created successfully",
            task: result,
        });

        
    } catch (error) {
        
        return res.status(500).send({
            success: false,
            message: "Internal Server Error",
            error: error.message,
        });

    }

}