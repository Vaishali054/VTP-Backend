import User from "../models/User.js";
import {updateDetail} from "../validations/update.js";

export const updateProfile= async(req,res)=>{
    const { id: userId } = req.body.user;

    const isValidData=updateDetail.safeParse(req.body);

    if(!isValidData.success){
        return res.status(400).json({
            message: isValidData.error.issues[0].message,
            error: isValidData.error,
        });
    }

    console.log(isValidData.data)

    try{

        const user= await User.findById(userId);

        if(!user){
            return res.status(404).json({
                message: "User not found"
            });
        }
        

        const updatedUser= await User.findByIdAndUpdate(userId, {
            $set : isValidData.data
        },{new : true});

        return res.status(200).json({
            message: "Profile updated Successdully",
            user: updatedUser
        });
    }catch(error){
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
