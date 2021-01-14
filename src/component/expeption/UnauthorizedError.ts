import BaseError from './BaseError';

class UnauthorizedError extends BaseError {
	constructor(message?: string) {
		super(401, message || 'Unauthorized Error!!!');
	}
}

export default UnauthorizedError;
