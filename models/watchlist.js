const mongoose = require('mongoose');

const WatchlistSchema = new mongoose.Schema({
    Company_Id: { 
        type: mongoose.Schema.Types.ObjectId, 
        required: true, 
        ref: "Companies" 
    },
    User_Id: { 
        type: mongoose.Schema.Types.ObjectId, 
        required: true, 
        ref: "Users" 
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('WatchList', WatchlistSchema);
