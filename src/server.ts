import express from 'express';
import http from 'http';
import './config/env.platform';

import sign from './product/customLogin/router';

const app = express();

app.use('/sign', sign);

app.use('/', (req: express.Request, res: express.Response) => {
	res.send('Hello');
});

http.createServer(app).listen(process.env.PORT || 8080, () => {
	console.log(`✔ Server Running!!!`);
});
