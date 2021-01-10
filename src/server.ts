import express from 'express';
import { createServer } from 'http';
import router from './router';
import './config/env.platform';

const app = express();

app.use('/api', router);

createServer(app).listen(process.env.PORT || 8080, () => {
	console.log(`✔ Server Running!!!`);
});
