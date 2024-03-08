const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
    max_stock_price: { 
        type: Number, 
        required: true 
    },
    min_stock_price: { 
        type: Number, 
        required: true 
    },
    symbol: { 
        type: String, 
        required: true, 
        unique: true 
    },
    company_Id: { 
        type: mongoose.Schema.Types.ObjectId, 
        unique: true,
        required: true 
    },
    company_name: { 
        type: String, 
        required: true 
    },
    current_Price: { 
        type: Number, 
        required: true 
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Company', CompanySchema);