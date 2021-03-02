import express from 'express';
import kakao from './controller/kakaoLogin';
import valid from './validator/snsLogin.schema';

const router = express.Router();

router.get('/user/kakao', valid.kakaoLogin, kakao.login);

export default router;
