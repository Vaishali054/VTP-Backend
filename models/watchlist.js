const mongoose = require('mongoose');

const WatchlistSchema = new mongoose.Schema({
    company_Id: { 
        type: mongoose.Schema.Types.ObjectId, 
        required: true, 
        ref: "Companies" 
    },
    user_Id: { 
        type: mongoose.Schema.Types.ObjectId, 
        required: true, 
        ref: "Users" 
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('watchlist', WatchlistSchema);