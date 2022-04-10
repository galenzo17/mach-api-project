"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const responses_1 = require("../controllers/responses");
router.post('/addCommonResponse', responses_1.responseAdd);
router.get('/responselist', responses_1.responseList);
exports.default = router;
//# sourceMappingURL=responses.js.map