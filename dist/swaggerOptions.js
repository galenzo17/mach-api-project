"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = void 0;
exports.options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Una micro Api de Agustin 😃",
            version: "1.0.0",
            description: "con Typescript y JWT, express y swagger, MongoDB tambien ",
        },
        servers: [
            {
                url: "http://localhost:3000",
            },
        ],
    },
    apis: ["./src/routes/*.ts"],
};
//# sourceMappingURL=swaggerOptions.js.map