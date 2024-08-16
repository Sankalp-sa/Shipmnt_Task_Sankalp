import studentClass from "../models/studentClassModel.js";
import task from "../models/taskModel.js";

export const viewClassrooms = async (req, res) => {

    try {
        
        const classrooms = await studentClass.find({ student: req.body.userId }).populate({
            path: "classRoom",
            select: "classroomName",
        }).select("-student");            

        return res.status(200).send({
            success: true,
            classrooms,
        });

    } catch (error) {
        console.log(error)
        
    }

}

export const viewTasks = async (req, res) => {

    try {

        const { classroomId, studentId } = req.params;

        const st = await studentClass.find({ student: studentId, classRoom: classroomId })


        if(!st){
            return res.status(400).send({
                success: false,
                message: "You are not enrolled in this classroom",
            });
        }

        let restasks = []

        for(let i=0; i<st.length; i++){
            const tasks = await task.find({ classroom: classroomId }).select("-classroom");
            restasks.push(...tasks);
        }

        return res.status(200).send({
            success: true,
            tasks: restasks,
        });

    } catch (error) {

        return res.status(500).send({
            success: false,
            message: "Internal Server Error",
            error: error.message,
        });
        
    }

}