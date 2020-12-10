import express from 'express';
import 'reflect-metadata';
import './database/connect';

import Routes from './routes';

const app = express();

app.use(express.json());
app.use(Routes);

app.listen(5000, () => console.log('Running'));
