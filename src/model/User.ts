import mongoose, { Schema } from 'mongoose';
import BookMark from './BookMark';
import Buy from './Buy';
import Sell from './Sell';

const User = new Schema({
	uuid: String,
	snsKind: String,
	role: String,
	buy: [Buy],
	sell: [Sell],
	book_marks: [BookMark],
	created: { type: Date, default: Date.now },
	updated: { type: Date, default: Date.now },
});

export default User;
