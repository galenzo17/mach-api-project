import express, { Application } from 'express';
import morgan from 'morgan';
import cors from "cors";
import AuthController from './routes/auth'
import questionList from './routes/questions'
import responseList from './routes/responses'
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc, { Server } from "swagger-jsdoc";
import { options } from "./swaggerOptions";
//const bodyParser = require("body-parser");
//const app: Application = express();
import dotenv from 'dotenv';
dotenv.config();
import './database';


let port = 3000


export const get = () => {
    const app: Application = express()
    app.use(cors());
    // settings
    app.set('port', process.env.PORT || port);
    app.use(express.static("public"));
    // Middlewares
    app.use(morgan('dev'));
    app.use(express.json());
    
    const specs = swaggerJsDoc(options);
    
    // Routes
    app.use( responseList);
    app.use( questionList);
    app.use('/api/auth', AuthController);
    app.use("/", swaggerUI.serve, swaggerUI.setup(specs));

    return app
}


export const start = () => {
    const app = get()
    try {
        var server =  app.listen(port, async () => {
            console.log(`Mongo uri`,process.env.MONGODB_URI);
            await console.log(`Server running is no real on http://localhost:${port}`)
        })
        return server
    } catch (error) {
        console.log(`Error occurred: ${error}`)
    }
}

start()