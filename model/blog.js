var mongoose = require('./db.js');
var Fn = require('../util/init')();
var blogSchema = new mongoose.Schema({
	title:String,
	tags:String,
	createTime:{type:Number,default:Fn.date.time()},
	updateTime:{type:Number,default:Fn.date.time()},
	info:String,
	pv:{type:Number,default:0},
	isPublish:Boolean,
	content:String
},{collection:'blog'});

module.exports = mongoose.model('blog',blogSchema);