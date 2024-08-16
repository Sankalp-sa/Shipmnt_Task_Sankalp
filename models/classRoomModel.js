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
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        dueDate: {
            type: Date,
            required: true
        },
    }]
}, {timestamps: true});

const classRoom = mongoose.model("ClassRoom", classRoomSchema);

export default classRoom;