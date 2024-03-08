const mongoose = require('mongoose');

const UserStocksSchema = new mongoose.Schema({
    user_Id: { 
        type: mongoose.Schema.Types.ObjectId, 
        required: true, 
        ref: 'User' 
    },
    company_Id: { 
        type: mongoose.Schema.Types.ObjectId, 
        required: true, 
        ref: 'Company' 
    },
    numberOfStocks: { type: Number, 
        required: true, 
        min: 0
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('UserStocks', UserStocksSchema);
