import { NextFunction, Request, Response } from "express";
import { User } from "../models/user.js";
import { newUserRequestBody } from "../types/types.js";

export const newUser = async (
    req: Request< {}, {}, newUserRequestBody >, 
    res: Response, 
    next: NextFunction) => {
    try {
        const {_id, name, email, photo, gender, role, age, dob} = req.body;

       const user =  await User.create({
        _id, 
        name, 
        email, 
        photo, 
        gender, 
        role, 
        age, 
        dob
        });
        return (
            res.status(200).json({
            success: true,
            message: `Welcome, ${user.name}`,
        }));

    } catch (error) {
        console.log(error);
        
    }
}