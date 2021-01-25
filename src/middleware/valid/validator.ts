import { NextFunction, Response, Request } from 'express';
import { validationResult, ValidationChain } from 'express-validator';
import { ValidationError } from '../../util/expeption';

const validate = (validationList: ValidationChain[]) => {
	return async (req: Request, res: Response, next: NextFunction) => {
		await Promise.all(
			validationList.map((validation: ValidationChain) => validation.run(req))
		);

		const errors = validationResult(req);

		if (errors.isEmpty()) {
			return next();
		}
		next(new ValidationError(errors));
	};
};

export default validate;
