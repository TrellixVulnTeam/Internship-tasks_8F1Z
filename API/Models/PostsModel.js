const mongoose=require('mongoose');

const post=mongoose.Schema({
    userID: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports=mongoose.model('Posts',post);