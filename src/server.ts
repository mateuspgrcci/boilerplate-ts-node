import express from 'express';
import TesteController from './controllers/TestController';

const app = express();

app.get('/', (req, res) => { res.send(TesteController.teste()); });

app.listen(5000);
