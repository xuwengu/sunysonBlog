var parse = require('co-body');
var blogModel = require('../model/blog');
var userModel = require('../model/user');
var markdown = require('markdown').markdown;
var Fn = require('../util/init')();

module.exports = function(app){

	/*登录认证*/
	app.get('/admin/login',function *(next){
		yield this.render('/system/login',{
			title:'koa'
		});
	});
	app.post('/admin/login',function *(next){
		var body = yield parse(this);
		var user = yield userModel.where({name:body.name}).findOne().exec();
		console.log(user);
		if(user!=null){
			if(user.pswd==body.pswd){
				console.log('login success...')
				this.cookies.set('username',user.name);
				this.session.user = user;
				this.redirect('/admin');
			}else{
				this.redirect('/admin/login');
			}
		}else {
			this.redirect('/admin/login');
		}
	});
	app.get('/admin/logout',function *(next){
		this.session.user = null;
		this.redirect('/admin/login');
	});

	app.get('/admin/register',function *(next){
		yield this.render('/system/register',{
			title:'koa'
		});
	});
	app.post('/admin/register',function *(next){
		var user = yield parse(this);
		userModel(user).save(function(err,user){
			if(err){
				console.log(err);
			}
		});
		this.redirect('/admin',{
			title:'添加文章'
		});
	});



	/*主页*/
	app.get('/admin',function *(next){
		yield this.render('/system/index',{
			title:'koa'
		});
	});

	/*RESTful*/
	app.get('/admin/blog',function *(next){
		var blogList = yield blogModel.find().limit(10).sort({updateTime:-1}).lean().exec();
		for(var i=0;i<blogList.length;i++){
			blogList[i].content = markdown.toHTML(blogList[i].content);
			blogList[i].createTime =  Fn.date.dgm(blogList[i].createTime);
			blogList[i].updateTime =  Fn.date.dgm(blogList[i].updateTime);
		}
		this.body = blogList;
	});
	app.delete('/admin/blog/:id',function *(next){
		yield blogModel.remove({_id:this.params.id}).exec();
		this.body = 'success';
	});

	app.put('/admin/article',function *(next){
		var article = yield parse(this);
		article.time = new Date;
		yield blogModel.findByIdAndUpdate(article._id,article).exec();
		this.body = 'success';
	});



	app.get('/admin/blog/add',function *(next){
		yield this.render('/system/blog/add',{
			title:'添加文章'
		});
	});
	app.post('/admin/blog/add',function *(next){
		var blog = yield parse(this);
		blogModel(blog).save(function(err,blog){
			if(err){
				console.log(err);
			}
		});
		this.redirect('/admin',{
			title:'添加文章'
		});
	});


	app.get('/admin/blog/edit/:id',function *(next){
		var blog = yield blogModel.findOne({_id:this.params.id}).exec();
		yield this.render('/system/blog/edit',{
			title:'修改文章',
			blog:blog
		});
	});
	app.post('/admin/blog/edit/:id',function *(next){
		var blog = yield parse(this);
		blog.updateTime = Fn.date.time();
		yield blogModel.findByIdAndUpdate(this.params.id,blog).exec();
		this.redirect('/admin',{
			title:'文章列表'
		});
	});
	
}