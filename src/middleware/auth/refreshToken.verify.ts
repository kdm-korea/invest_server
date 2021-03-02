import { Request, NextFunction, Response } from 'express';
import verification from './jwt.verify';

const accessTokenVerify = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const token = req.headers.authorization as string;
	const payload = await verification(
		token,
		process.env.JWT_REFERSH_KEY as string
	);
	const { uuid } = payload;
	req.body = { uuid };
	next();
};
export default accessTokenVerify;
