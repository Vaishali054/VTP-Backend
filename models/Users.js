const mongoose = require('mongoose');

const UserModel = new mongoose.Schema({

    user_Id:{
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
    current_balance: {
        type: Number,
        default: 100000,
        required: true
    },
    account_status:{
        type: String,
        enum: ['active', 'suspended'],
        default: 'active',
    },
},{
    timestamps : true
})


module.exports = mongoose.model('Users', UserModel)
