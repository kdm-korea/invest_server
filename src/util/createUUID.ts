import { v4 as uuidv4 } from 'uuid';

export default function createUUID(): string {
	const uuid = uuidv4().split('-');
	return uuid[2] + uuid[1] + uuid[0] + uuid[3] + uuid[4];
}
