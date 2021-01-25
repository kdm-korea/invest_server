import { header } from 'express-validator';
import validate from '../../../middleware/valid/validator';

const token = header('authorization')
	.notEmpty()
	.withMessage('토큰이 없습니다.');

export default { kakaoLogin: validate([token]) };
