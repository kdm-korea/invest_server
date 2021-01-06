import express from 'express';

const router = express.Router();

router.get('/sign', (req, res, next) => {
	console.log(`sign router`);
	res.send('sign');
});

export default router;
