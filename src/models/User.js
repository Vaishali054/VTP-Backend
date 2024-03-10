import mongoose from "mongoose";
const UserModel = new mongoose.Schema({

    User_Id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true,
        trim: true,
    },
    name: {
        type: String,
        required: true,
    },
    email_id:{
        type: String,
        required: true,
        unique:true,
        trim: true,
    },
    password: {
        type: String,
        required: true
    },
    current_Balance: {
        type: Number,
        default: 100000,
        required: true
    },
    accountStatus:{
        type: String,
        enum: ['active', 'deleted'],
        default: 'active',
    },
},{
    timestamps : true,
    collection: 'Users'
})

const User = mongoose.model('Users', UserModel)
export default User;
