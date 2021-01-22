import mongoose, { Schema } from 'mongoose';

const BookMark = new Schema({
	title: String,
	stock_list: { stock_id: Number, stock_name: String },
});

export default BookMark;
