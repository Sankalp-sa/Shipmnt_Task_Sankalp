import mongoose from "mongoose";

const classRoomSchema = mongoose.Schema({
    classroomName: {
        type: String,
        required: true,
        trim: true
    },
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Task"
    }]
}, {timestamps: true});

const classRoom = mongoose.model("ClassRoom", classRoomSchema);

export default classRoom;