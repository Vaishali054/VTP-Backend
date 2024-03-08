const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    User_Id: { 
        type: mongoose.Schema.Types.ObjectId, 
        required: true, 
        ref: 'Users' 
    },
    Company_Id: { 
        type: mongoose.Schema.Types.ObjectId, 
        required: true, 
        ref: 'Companies' 
    },
    Transaction_Id: { 
        type: mongoose.Schema.Types.ObjectId, 
        unique: true,
        required: true 
    },
    Price: { 
        type: Number, 
        required: true 
    },
    Quantity: { 
        type: Number, 
        required: true, 
        min: 0 
    },
    Transaction_type: {
        type: String,
        enum: ['Buy', 'Sell'],
        req: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Transaction', TransactionSchema);
