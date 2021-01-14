import BaseError from './BaseError';

class BadRequestError extends BaseError {
	constructor(message?: string) {
		super(400, message || 'Bad Request Error!!!');
	}
}

export default BadRequestError;
