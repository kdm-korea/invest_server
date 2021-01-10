import express from 'express';
import { createServer } from 'http';
import router from './router';
import './config/platform/env.config';

const app = express();

app.use('/api', router);

createServer(app).listen(process.env.PORT || 8080, () => {
	console.log(`✔ Server Running!!!`);
});
