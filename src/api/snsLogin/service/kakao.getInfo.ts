import axios from 'axios';
import { Role } from '../../../component/enum/Role';
import {
	BadRequestError,
	NotFoundError,
	UnauthorizedError,
} from '../../../util/expeption';
import { KakaoAuthDto } from '../dto/kakaoAuth.dto';

/**
 * @Request
 * @param accessToken
 *
 * @Response
 * @param uuid
 */
const getKakaoId = async (accessToken: string): Promise<KakaoAuthDto> => {
	const config = {
		headers: {
			Authorization: accessToken,
		},
	};
	const recode = await axios.get(
		'https://kapi.kakao.com/v1/user/access_token_info',
		config
	);

	if (recode.status === 200) {
		return {
			uuid: recode.data.id,
			snsKind: 'kakao',
			role: Role.CUSTOMER,
		};
	}
	if (recode.status === 401) {
		throw new UnauthorizedError('만료된 토큰입니다.');
	} else if (recode.status === 400) {
		throw new BadRequestError('잘못된 토큰입니다.');
	} else {
		throw new NotFoundError('데이터를 찾을 수 없습니다.');
	}
};

export default getKakaoId;
