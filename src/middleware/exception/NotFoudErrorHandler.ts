import { NextFunction, Request, Response } from 'express';
import { NotFoundError } from '../../component/expeption';

const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
	throw new NotFoundError('존재하지 않는 API입니다.');
};

export default notFoundHandler;
