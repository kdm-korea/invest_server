import express from 'express';
import customLogin from './product/customLogin/router';
import snsLogin from './product/snsLogin/router';

const router = express.Router();

router.use('/', customLogin);

router.use('/', snsLogin);

router.use('/', (req: express.Request, res: express.Response) => {
	res.send('Hello');
});

export default router;
