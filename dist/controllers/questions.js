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
exports.questionAdd = exports.questionList = void 0;
const Question_1 = __importDefault(require("../models/Question"));
exports.questionList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('questionList', process.env.MONGODB_URI);
    const questions = yield Question_1.default.find();
    res.status(200).json({ "questions": questions });
});
exports.questionAdd = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const { error } = signupValidation(req.body);
    //if (error) return res.status(400).send(error.details[0].message);
    const question = new Question_1.default({
        commonQ: req.body.commonQ
    });
    yield question.save();
    res.status(201).json(question);
});
//# sourceMappingURL=questions.js.map