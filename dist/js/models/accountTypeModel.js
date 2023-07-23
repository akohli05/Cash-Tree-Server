"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const accountTypeSchema = new mongoose_1.Schema({
    accountTypes: {
        type: [String],
        required: true,
    },
});
exports.default = (0, mongoose_1.model)("AccountTypeModel", accountTypeSchema);
