import { Result } from 'express-validator';

class ValidationError extends Error {
	public status: number;

	public messages: Result;

	constructor(messages: Result) {
		super();
		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, ValidationError);
		}
		this.status = 400;
		this.messages = messages;
	}
}

export default ValidationError;
