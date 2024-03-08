const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    user_Id: { 
        type: mongoose.Schema.Types.ObjectId, 
        required: true, 
        ref: 'Users' 
    },
    company_Id: { 
        type: mongoose.Schema.Types.ObjectId, 
        required: true, 
        ref: 'Companies' 
    },
    transaction_Id: { 
        type: mongoose.Schema.Types.ObjectId, 
        unique: true,
        required: true 
    },
    price: { 
        type: Number, 
        required: true 
    },
    quantity: { 
        type: Number, 
        required: true, 
        min: 0 
    },
    transaction_type: {
        type: String,
        enum: ['Buy', 'Sell'],
        req: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Transaction', TransactionSchema);
