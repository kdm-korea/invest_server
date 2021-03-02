import express from 'express';
import mongoose from 'mongoose';
import snsLogin from './api/snsLogin/router';
import { NotFoundHandler, ErrorHandler } from './middleware/exception';

const router = express.Router();

router.use('/', snsLogin);

router.use(NotFoundHandler);

router.use(ErrorHandler);

export default router;
