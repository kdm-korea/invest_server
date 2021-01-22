import { Role } from '../../../component/enum/Role';

export interface KakaoAuthDto {
	uuid: string;

	snsKind: string;

	role: Role;
}
