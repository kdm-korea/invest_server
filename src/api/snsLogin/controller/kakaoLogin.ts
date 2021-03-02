import { NextFunction, Request, Response } from 'express';
import _ from 'underscore';
import createUUID from '../../../component/createUUID';
import {
	createAccessToken,
	createRefreshToken,
} from '../../auth/service/createToken';
import { UserDto } from '../dto/User.dto';
import service from '../service';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const login = async (req: Request, res: Response, next: NextFunction) => {
	const token = req.headers.authorization;

	try {
		const kakaoUser = await service.getKakaoUuid(token as string);
		const uuid = createUUID();
		const user = _.extend(kakaoUser, { uuid });

		console.log(user);
		// const result = await db.createUser(user);

		const [accessToken, refreshToken] = await Promise.all([
			createAccessToken(user.uuid),
			createRefreshToken(user.role, user.uuid),
		]);

		res.json({ accessToken, refreshToken });
	} catch (err) {
		console.log(err.message);
		next(err);
	}
};

export default { login };
