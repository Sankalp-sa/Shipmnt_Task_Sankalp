import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
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
    classroom: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ClassRoom",
        required: true
    }
}, {timestamps: true});

const task = mongoose.model("Task", taskSchema);

export default task;
