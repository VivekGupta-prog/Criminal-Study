const mongoose = require("mongoose");

const adminUserSchema = new mongoose.Schema({
    fName: {
        type: String,
        default: ""
    },
    lName: {
        type: String,
        default: ""
    },
    department: {
        type: String,
        required: true,
        default: ""
    },
    departmentId: {
        type: String,
        required: true,
        unique: true,
        default: ""
    },
    username: {
        type: String,
        required: true,
        default: ""
    },
    password: {
        type: String,
        required: true,
        default: ""
    }
});

module.exports = mongoose.model('AdminUser', adminUserSchema);