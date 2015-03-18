var articleModel = require('../model/blog');
var markdown = require('markdown').markdown;

module.exports = function(app,body,backend){
	return {
		create:function*(){
			body.time = new Date;
			new articleModel(body).save(function(err,article){
				if(err){
					console.log(err);
				}
			});
			app.redirect('/admin/articleList',{
				title:'articleList'
			});
		},

		update:function*(){
			body.time = new Date;
			console.log('body:'+JSON.stringify(body));
			yield articleModel.findByIdAndUpdate(body.id,body).exec();
			app.redirect('/admin/articleList',{
				title:'文章列表'
			});
		},

		del:function*(){
			yield articleModel.remove({_id:app.query.id}).exec();
			app.redirect('/admin/articleList',{
				title:'文章列表'
			});
		},

		list:function*(){
			var posts = yield articleModel.find().limit(10).sort({time:-1}).exec();
			if(posts){
				posts[0].content = markdown.toHTML(posts[0].content);
			}
			console.log('posts:'+posts);
			yield app.render('/backend/article/list',{
				title:'文章列表',
				posts:posts
			});
		},

		findById:function*(){
			var article = yield articleModel.findOne({_id:body.id}).exec();
			
			article.content = markdown.toHTML(article.content);
			console.log('article:'+article.content);
			app.body = article;
			//yield app.render('/backend/articleList',);
		},
		getById:function*(){
			console.log('app.query:'+app.query.name);
			var article = yield articleModel.findOne({_id:app.query.id}).exec();
			
			//article.content = markdown.toHTML(article.content);
			//console.log('article:'+article.content);
			if(article){
				yield app.render('/backend/editArticle',{
					title:'文章编辑',
					article:article
				});
			}
		}
	}
}