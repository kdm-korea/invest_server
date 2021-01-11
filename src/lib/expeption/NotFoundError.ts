import BaseError from './BaseError';

class NotFoundError extends BaseError {
	constructor(message?: string) {
		super(404, message || 'Not Found Error');
	}
}

export default NotFoundError;
