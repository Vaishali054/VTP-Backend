const mongoose = require('mongoose');

const PortfolioSchema = new mongoose.Schema({
    user_Id: { type: mongoose.Schema.Types.ObjectId, 
        required: true, 
        unique: true,
        ref: 'Users' 
    },
    status: { 
        type: String, 
        enum: ['public', 'private'],
        required: true 
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Portfolio', PortfolioSchema);