import mongoose from "mongoose";

const studentClassSchema = mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    classRoom: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ClassRoom",
        required: true
    }
}, {timestamps: true});

const studentClass = mongoose.model("StudentClass", studentClassSchema);

export default studentClass;