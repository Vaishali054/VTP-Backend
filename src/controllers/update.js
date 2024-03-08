import User from "../models/User.js";
import {emailValidation, nameValidation, passwordValidation} from "../validations/update.js";
import bcrypt from "bcrypt";

export const updateProfile= async(req,res)=>{
    const { id: userId } = req.body.user;

    try{

        const user= await User.findById(userId);

        if(!user){
            return res.status(404).json({
                message: "User not found"
            });
        }

        const updateFields = {};

        // Check and validate name
        if (req.body.name) {
            const nameValidationResult = nameValidation.safeParse(req.body);
            if (!nameValidationResult.success) {
                return res.status(400).json({
                    message: nameValidationResult.error.issues[0].message,
                    error: nameValidationResult.error,
                });
            }
            updateFields.name = req.body.name;
        }

        // Check and validate email
        if (req.body.email_id) {
            const emailValidationResult = emailValidation.safeParse(req.body);
            if (!emailValidationResult.success) {
                return res.status(400).json({
                    message: emailValidationResult.error.issues[0].message,
                    error: emailValidationResult.error,
                });
            }
            updateFields.email_id = req.body.email_id;
        }

        // Check and validate password
        if (req.body.password) {
            const passwordValidationResult = passwordValidation.safeParse(req.body);
            if (!passwordValidationResult.success) {
                return res.status(400).json({
                    message: passwordValidationResult.error.issues[0].message,
                    error: passwordValidationResult.error,
                });
            }
            updateFields.password = await bcrypt.hash(req.body.password, 11);
        }
        

        const updatedUser= await User.findByIdAndUpdate(userId, {
            $set : updateFields
        },{new : true});

        return res.status(200).json({
            message: "Profile updated Successdully",
            user: updatedUser
        });
    }catch(error){
        console.log(error)
        return res.status(500).json({
            message: "Internal server error"
        });
    }

};

export const deleteProfile=async(req,res)=>{
    console.log(req.body)
    const { id: userId } = req.body.user;

    try{

        const user= await User.findById(userId);
        console.log(user)

        if(!user){
            return res.status(404).json({
                message: "User not found"
            });
        }
        

        user.accountStatus = "deleted";
        console.log(user)
        await user.save();

        return res.status(200).json({
            message: "Account deleted successfully",
        });
    }catch(error){
        console.log(error)
        return res.status(500).json({
            message: "Internal server error"
        });
    }

}
