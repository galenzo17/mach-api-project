"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const auth_1 = require("../controllers/auth");
const verifyToken_1 = require("../libs/verifyToken");
router.post('/signup', auth_1.signup);
router.post('/signin', auth_1.signin);
router.get('/profile', verifyToken_1.TokenValidation, auth_1.profile);
exports.default = router;
//# sourceMappingURL=auth.js.map