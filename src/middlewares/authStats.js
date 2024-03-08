import User from "../models/User.js";

export const ValidateStats= async(req,res,next)=>{
    const userId=req.body.user.id;

    try{
        const user=await User.findById(userId);

        if(user.accountStatus==="deleted"){
            return res.status(403).json({
                message: "The account is deleted"
            });
        }

        req.body.user=user;
        next();
    }
    catch(err){
        res.status(500).json({
            message: "Internal server error during user data validation"
        });
        console.log(err);
    }
};