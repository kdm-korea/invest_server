class BaseError extends Error {
	status: number;

	constructor(status?: number, message?: string) {
		super();
		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, BaseError);
		}
		this.status = status || 500;
		this.message = message || 'Not Define Error';
	}
}

export default BaseError;
