const mongoose=require("mongoose");

const publicUserSchema = new mongoose.Schema({
    fName: {
        type: String,
        default: ""
    },
    lName: {
        type: String,
        default: ""
    },
    emailId: {
        type: String,
        required: true,
        unique: true,
        default: ""
    },
    username: {
        type: String,
        required: true,
        unique: true,
        default: ""
    },
    password: {
        type: String,
        required: true,
        default: ""
    }
});

module.exports = mongoose.model('PublicUser', publicUserSchema);