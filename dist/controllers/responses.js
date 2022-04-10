"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseAdd = exports.responseList = void 0;
const ResponseByAgustin_1 = __importDefault(require("../models/ResponseByAgustin"));
exports.responseList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const responses = yield ResponseByAgustin_1.default.find();
    res.json({ "responses": responses });
});
exports.responseAdd = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = new ResponseByAgustin_1.default({ commonR: req.body.commonR, });
    yield response.save();
    res.json(response);
});
//# sourceMappingURL=responses.js.map