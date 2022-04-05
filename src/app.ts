import express, { Application } from 'express';
import morgan from 'morgan';


import AuthController from './routes/auth'
import questionList from './routes/questions'
const app: Application = express();

// settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
// app.get('/', (req, res) => {
//    // res.sendFile(path.join(__dirname, '/index.html'));
// });
// Routes
app.use('/', questionList);
app.use('/api/auth', AuthController);

export default app;
