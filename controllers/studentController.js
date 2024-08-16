import studentClass from "../models/studentClassModel.js";

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