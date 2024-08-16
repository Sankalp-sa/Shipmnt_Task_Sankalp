import mongoose from "mongoose";

const taskStatusSchema = mongoose.Schema({
    task: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Task",
        required: true
    },
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    classroom: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ClassRoom",
        required: true
    },
    status: {
        type: String,
        enum: ["pending", "completed"],
        default: "pending"
    }
}, {timestamps: true});

const taskStatus = mongoose.model("TaskStatus", taskStatusSchema);

export default taskStatus;