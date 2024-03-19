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
    transactionId: {
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
    transactionType: {
        type: String,
        enum: ['Buy', 'Sell'],
        required: true
    },
    transactionTime: {
        type: Date,
        required: true,
        default: Date.now
    },
    transactionDate: {
        type: Date,
        required: true
    }
}, {
    timestamps: true,
    collection: 'Transactions'
});

export default mongoose.model('Transaction', TransactionSchema);
