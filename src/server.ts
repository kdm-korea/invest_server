import express from 'express';
import http from 'http';
import router from './router';
import './config/env.platform';

const app = express();

app.use('/api', router);

http.createServer(app).listen(process.env.PORT || 8080, () => {
	console.log(`✔ Server Running!!!`);
});
