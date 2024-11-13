const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DogSchema = new Schema({
	name: {
		type: String,
		required: true
	},
  	
	gender: {
		type: String,
		required: true,
		trim: true
	},

	breed: {
		type: String,
		required: true,
		trim: true
	},

	age: {
		type: Schema.Types.Number,
		required: true
	},

	treat: {
		type: String,
		required: true,
		trim: true
	}
});

module.exports = mongoose.model('dogs', DogSchema);