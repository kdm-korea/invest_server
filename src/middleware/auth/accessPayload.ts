import { Role } from '../../component/enum/Role';

export interface AccessTokenPayload {
	uuid: string;
	role: Role;
}
