import { NextFunction, Request, Response } from 'express';
import { BaseError } from '../../lib/expeption';

const ErrorResponse = (
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	if (err instanceof BaseError) {
		res.status(err.status).json({ message: err.message });
	} else {
		res.status(500).json({ message: 'Server Error' });
	}
};

export default ErrorResponse;
