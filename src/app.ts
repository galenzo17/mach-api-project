import express, { Application } from 'express';
import morgan from 'morgan';

import AuthController from './routes/auth'
import questionList from './routes/questions'
import responseList from './routes/responses'
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const swaggerJsdoc = require("swagger-jsdoc");
const bodyParser = require("body-parser");
const app: Application = express();
app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerDocument));
// settings
app.set('port', process.env.PORT || 3000);
app.use(express.static("public"));
// Middlewares
app.use(morgan('dev'));
app.use(express.json());
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "LogRocket Express API with Swagger",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "LogRocket",
        url: "https://logrocket.com",
        email: "info@email.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3000/books",
      },
    ],
  },
  apis: ["./api/questions.ts"],
};
const specs = swaggerJsdoc(options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);
// app.get('/', (req, res) => {
//    // res.sendFile(path.join(__dirname, '/index.html'));
// });
// Routes
app.use( responseList);
app.use( questionList);
app.use('/api/auth', AuthController);

export default app;
