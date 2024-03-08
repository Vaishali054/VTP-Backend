const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
    Max_Stock_Price: { 
        type: Number, 
        required: true 
    },
    Min_Stock_Price: { 
        type: Number, 
        required: true 
    },
    Symbol: { 
        type: String, 
        required: true, 
        unique: true 
    },
    Company_Id: { 
        type: mongoose.Schema.Types.ObjectId, 
        unique: true,
        required: true 
    },
    Name: { 
        type: String, 
        required: true 
    },
    Current_Price: { 
        type: Number, 
        required: true 
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Company', CompanySchema);
