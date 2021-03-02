import { Request } from 'express';
import jwt, { TokenExpiredError } from 'jsonwebtoken';
import { BadRequestError, UnauthorizedError } from '../../util/expeption';

const verification = async (token: string, secretKey: string) => {
	if (token === undefined) {
		throw new BadRequestError('토큰이 존재하지 않습니다.');
	}

	try {
		const payload = <any>jwt.verify(token.split(' ')[1], secretKey);
		return payload;
	} catch (error) {
		if (error.message === TokenExpiredError) {
			throw new UnauthorizedError('만료된 토큰입니다.');
		}
		throw new BadRequestError('잘못된 토큰입니다.');
	}
};

export default verification;
