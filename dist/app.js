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
exports.start = exports.get = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const auth_1 = __importDefault(require("./routes/auth"));
const questions_1 = __importDefault(require("./routes/questions"));
const responses_1 = __importDefault(require("./routes/responses"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swaggerOptions_1 = require("./swaggerOptions");
//const bodyParser = require("body-parser");
//const app: Application = express();
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
require("./database");
let port = 3000;
exports.get = () => {
    const app = express_1.default();
    app.use(cors_1.default());
    // settings
    app.set('port', process.env.PORT || port);
    app.use(express_1.default.static("public"));
    // Middlewares
    app.use(morgan_1.default('dev'));
    app.use(express_1.default.json());
    const specs = swagger_jsdoc_1.default(swaggerOptions_1.options);
    // Routes
    app.use(responses_1.default);
    app.use(questions_1.default);
    app.use('/api/auth', auth_1.default);
    app.use("/", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(specs));
    return app;
};
exports.start = () => {
    const app = exports.get();
    try {
        var server = app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
            console.log(`Mongo uri`, process.env.MONGODB_URI);
            yield console.log(`Server running is real on http://localhost:${port}`);
        }));
        return server;
    }
    catch (error) {
        console.log(`Error occurred: ${error}`);
    }
};
exports.start();
//# sourceMappingURL=app.js.map