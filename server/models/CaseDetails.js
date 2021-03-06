const mongoose = require("mongoose");

const caseDetailsSchema = new mongoose.Schema({
    id: {
        type:Number,
        required: true,
        default: ""
    },
    caseNumber: {
        type: Number,
        required: true,
        default: ""
    },
    date: {
        type: Date,
        required: true,
        default: ""
    },
    block: {
        type: String,
        required: true,
        default: ""
    },
    iucr: {
        type: String,
        required: true,
        required: true,
        default: ""
    },
    primaryType: {
        type: String,
        required: true,
        default: ""
    },
    description: {
        type: String,
        required: true,
        default: ""
    },
    locationDescription: {
        type: String,
        required: true,
        default: ""
    },
    arrest: {
        type: String,
        required: true,
        default: ""
    },
    domestic: {
        type: String,
        required: true,
        default: ""
    },
    beat: {
        type: String,
        required: true,
        default: ""
    },
    district: {
        type: String,
        required: true,
        default: ""
    },
    ward: {
        type: String,
        required: true,
        default: ""
    },
    communityArea: {
        type: String,
        required: true,
        default: ""
    },
    fbiCode: {
        type: String,
        required: true,
        default: ""
    },
    xCoordinate: {
        type: String,
        required: true,
        default: ""
    },
    yCoordinate: {
        type: String,
        required: true,
        default: ""
    },
    year: {
        type: String,
        required: true,
        default: ""
    },
    updatedOn: {
        type: Date,
        required: true,
        default: ""
    },
    latitude: {
        type: String,
        required: true,
        default: ""
    },
    longitude: {
        type: String,
        required: true,
        default: ""
    },
    location: {
        type: String,
        required: true,
        default: ""
    }
});

module.exports = mongoose.model('CaseDetail', caseDetailsSchema);