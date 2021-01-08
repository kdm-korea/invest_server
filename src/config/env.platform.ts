import dotenv from 'dotenv';
import path from 'path';

let envDir = '';

switch (process.env.NODE_ENV) {
	case 'development':
		envDir = '.develop.env';
		break;
	case 'production':
		envDir = '.product.env';
		break;
	case 'test':
		envDir = '.test.env';
		break;
	default:
		console.log(
			`❌ Can not find env file!!! => NODE_ENV: ${process.env.NODE_ENV}`
		);
		break;
}

dotenv.config({ path: path.join(__dirname, '../../', envDir) });
