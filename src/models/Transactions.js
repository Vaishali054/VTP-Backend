import mongoose from "mongoose";

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
    Transaction_Id: { 
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
    timestamps: true,
    collection: 'Transactions'
});

// module.exports = mongoose.model('Transaction', TransactionSchema);
export default mongoose.model('Transaction', TransactionSchema);
