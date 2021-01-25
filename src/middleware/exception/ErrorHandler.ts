import { NextFunction, Request, Response } from 'express';
import { BaseError } from '../../util/expeption';
import ValidationError from '../../util/expeption/ValidationError';

const ErrorResponse = (
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	if (err instanceof BaseError) {
		res.status(err.status).json({ message: err.message });
	} else if (err instanceof ValidationError) {
		res.status(err.status).json({ message: err.messages });
	} else {
		res.status(500).json({ message: 'Server Error' });
	}
};

export default ErrorResponse;
