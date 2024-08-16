import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

// Protect routes token based
export const requireSignIn = async (req, res, next) => {
    try {

        if(!req.headers.authorization){
            return res.status(400).send({
                success: false,
                message: "Unauthorized",
            });
        }

        const decoded = await jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
        
        req.body.userId = decoded._id;

        next();
    }   
    catch(err){
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Internal Server Login Error",
            error: err.message,
        });
    }
}

// admin access
export const isTeacher = async (req, res, next) => {
    try {
        
        const user = await userModel.findById(req.body.userId);

        if(user.role !== "teacher"){
            return res.status(400).send({
                success: false,
                message: "Unauthorized",
            });
        }

        next();
    } catch (error) {
        console.log(error)
    }
}