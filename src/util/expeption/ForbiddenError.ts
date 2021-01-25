import BaseError from './BaseError';

class ForbiddenError extends BaseError {
	constructor(message: string) {
		super(403, message || 'Forbidden Error!!!');
	}
}

export default ForbiddenError;
