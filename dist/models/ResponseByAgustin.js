"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
;
const responseSchema = new mongoose_1.Schema({
    commonR: {
        type: String,
        required: true,
        min: 10,
        lowercase: true
    }
}, {
    timestamps: true
});
exports.default = mongoose_1.model('ResponsebyMe', responseSchema);
//# sourceMappingURL=ResponseByAgustin.js.map