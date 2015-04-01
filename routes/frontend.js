var blogModel = require('../model/blog');
var userModel = require('../model/user');
var markdown = require('markdown').markdown;
var Fn = require('../util/init')();

module.exports = function (app) {

	app.get('/blog',function *(next){
		var currentPage = this.query.p || 1; //当前页
		if(!this.query.counts){
			var perPage = 6;
			var blogList = yield blogModel.find().where({isPublish:true}).skip((currentPage-1)*perPage).limit(perPage).sort({createTime:-1}).lean().exec();
			for(var i=0;i<blogList.length;i++){
				blogList[i].createTime =  Fn.date.dgm(blogList[i].createTime);
			}
			this.body = blogList;
		}else{
			this.body  = yield blogModel.where({isPublish:true}).count().exec();
		}
	});
	app.get('/blog/:id',function *(next){
		var blog = yield blogModel.findOneAndUpdate({_id:this.params.id},{$inc:{pv:1}}).lean().exec();
		blog.content = markdown.toHTML(blog.content);
		blog.createTime = Fn.date.dgm(blog.createTime);
		this.body = blog;
	});
	
	app.get('/about',function *(next){
		yield this.render('/about',{
			title:'关于我'
		});
	});
}