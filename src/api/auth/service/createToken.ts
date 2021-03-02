import jwt from 'jsonwebtoken';

export const createAccessToken = (uuid: string): string => {
	return jwt.sign({ uuid }, process.env.JWT_ACCESS_KEY as string, {
		algorithm: 'HS256',
		expiresIn: process.env.JWT_ACCESS_EXPIRESIN,
	});
};
/**
 *
 * @param uuid
 * 데이터는 사용자 uuid, role만 있어야 한다.
 */
export const createRefreshToken = (uuid: string, role: string): string => {
	return jwt.sign({ uuid, role }, process.env.JWT_REFERSH_KEY as string, {
		algorithm: 'HS256',
		expiresIn: process.env.JWT_REFRESH_EXPIRESIN,
	});
};
