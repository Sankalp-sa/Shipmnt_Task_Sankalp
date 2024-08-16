import bcrypt from 'bcrypt';

export const hashPassword = async (password) => {
    try {
        const saltRound = 10;
        const hashedPassword = await bcrypt.hash(password, saltRound);
        return hashedPassword;
    }
    catch (err) {
        console.log(err);
    }
}

export const comparePassword = async (password, hashedPassword) => {
    try {
        const isMatch = await bcrypt.compare(password, hashedPassword);
        return isMatch;
    }
    catch (err) {
        console.log(err);
    }
}

export const classRoomAuthCheck = async (req, res, next) => {
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

    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Internal Server Login Error",
            error: err.message,
        });
    }
}

