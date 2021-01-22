import mongoose, { Schema } from 'mongoose';

const Sell = new Schema({
	date: Date,
	stock_name: String,
	stock_id: Number,
	unit_price: Number,
	volume: Number,
	total_price: Number,
	income_total_price: Number,
	income_percent: Number,
	created: { type: Date, default: Date.now },
	updated: { type: Date, default: Date.now },
});

export default Sell;
