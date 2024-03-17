import mongoose from "mongoose";

const UserStocksSchema = new mongoose.Schema({
    User_Id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    Company_Id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Company'
    },
    numberOfStocks: {
        type: Number,
        required: true,
        min: 0
    }
}, {
    timestamps: true,
    collection: 'UserStocks'
});

const UserStocks = mongoose.model('UserStocks', UserStocksSchema);
export default UserStocks;
