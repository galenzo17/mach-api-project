"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
;
const questionSchema = new mongoose_1.Schema({
    commonQ: {
        type: String,
        required: true,
        min: 10,
        lowercase: true
    }
}, {
    timestamps: true
});
exports.default = mongoose_1.model('Question', questionSchema);
//# sourceMappingURL=Question.js.map