var mongoose = require('./db.js');
var settingSchema = new mongoose.Schema({
	title:String,
	keywords:String,
    description:Boolean,
    slogan:String,
    avator:String
},{collection:'setting'});

module.exports = mongoose.model('setting',settingSchema);
