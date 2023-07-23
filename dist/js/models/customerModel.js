"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const customerSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: true,
    },
    middleInitial: {
        type: String,
        required: false,
    },
    lastName: {
        type: String,
        required: true,
    },
    suffix: {
        type: String,
        required: false,
    },
    birthDate: {
        type: String,
        required: true,
    },
    socialSecurity: {
        type: String,
        required: true,
    },
    maidenNameOfMother: {
        type: String,
        required: true,
    },
    occupation: {
        type: String,
        required: true,
    },
    citizenship: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true,
    },
    personalPhone: {
        type: String,
        required: false,
    },
    workPhone: {
        type: String,
        required: false,
    },
    phoneExtension: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    addressAdditional: {
        type: String,
        required: false,
    },
    city: {
        type: String,
        required: false,
    },
    state: {
        type: String,
        required: true,
    },
    zipcode: {
        type: String,
        required: false,
    },
    addressMailing: {
        type: String,
        required: true,
    },
    addressAdditionalMailing: {
        type: String,
        required: false,
    },
    cityMailing: {
        type: String,
        required: true,
    },
    stateMailing: {
        type: String,
        required: true,
    },
    zipcodeMailing: {
        type: String,
        required: true,
    },
    accountTypes: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'AccountTypeModel'
    }
});
exports.default = (0, mongoose_1.model)("CustomerModel", customerSchema);
