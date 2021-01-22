import mongoose, { Schema } from 'mongoose';

const Buy = new Schema({
	stock_name: String,
	stock_id: Number,
	pay_kind: String,
	unit_price: Number,
	volume: Number,
	total_price: Number,
	is_done: Boolean,
	created: { type: Date, default: Date.now },
	updated: { type: Date, default: Date.now },
});

export default Buy;
