import classRoom from "../models/classRoomModel.js";

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