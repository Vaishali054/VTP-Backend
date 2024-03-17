import mongoose from "mongoose";

const WatchlistSchema = new mongoose.Schema({
    Company_Id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Companies'
    },
    User_Id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Users'
    }
}, {
    timestamps: true,
    collection: 'WatchList'
});
const WatchList = mongoose.model('WatchList', WatchlistSchema);

export default WatchList;
