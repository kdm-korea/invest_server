import express from 'express';
import customLogin from './product/customLogin/router';
import snsLogin from './product/snsLogin/router';
import { NotFoundHandler, ErrorHandler } from './middleware/exception';

const router = express.Router();

router.use('/', customLogin);

router.use('/', snsLogin);

router.use(NotFoundHandler);

router.use(ErrorHandler);

export default router;
