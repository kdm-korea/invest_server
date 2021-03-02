import { Role } from '../../../component/enum/Role';

export interface UserDto {
	uuid: string;

	snsId: string;

	snsKind: string;

	role: Role;
}
