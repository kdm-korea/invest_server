import { Role } from '../../../component/enum/Role';

export interface KakaoUserDto {
	snsId: string;

	snsKind: string;

	role: Role;
}
