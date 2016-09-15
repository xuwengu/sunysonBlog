var mongoose = require('./db.js');
var postSchema = new mongoose.Schema({
	title:String,
	tags:String,
	create_time:{type:Number,default:new Date().getTime()},
	last_update_time:{type:Number,default:new Date().getTime()},
	introduce:String,
	pv:{type:Number,default:0},
	is_publish:Boolean,
    is_del:Boolean,
	content:String
},{collection:'post'});

module.exports = mongoose.model('post',postSchema);
