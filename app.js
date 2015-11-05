var koa = require('koa');
var path = require('path');
var fs = require('fs');
var ejs = require('koa-ejs');
var serve = require('koa-static');
var router = require('koa-router');
var session = require('koa-session');
var flash = require('koa-flash');
var parse = require('co-body');
var conditional =require('koa-conditional-get');
var etag = require('koa-etag');
var markdown = require('markdown').markdown;

var logs = require('./util/logs');
var init = require('./util/init');
var frontend =require('./routes/frontend');
var system =require('./routes/system');
var cms =require('./routes/cms');
var blogModel = require('./model/blog');
var userModel = require('./model/user');
var config = require('./config/config');
var app = koa();

/*全局配置*/
global.C = config(__dirname);

/*全局函数*/
global.F = init;

/*304响应*/
app.use(conditional());
app.use(etag());

app.use(session(app));
app.use(serve(__dirname+'/public',{maxage:60*60*24*15}));
app.use(flash());
app.keys = ['user'];

/*访问日志*/
//app.use(logs());


/*登录拦截
app.use(function *(next){
	var url = this.url.toLowerCase();
	if(url.indexOf('admin')>=0){
		if(url != '/admin/login'&&!this.session.user){
			this.redirect('/admin/login');
		}
	};
	yield next;
});*/

app.use(router(app));

/*后台路由*/
cms(app);

/*前台路由*/
frontend(app);

ejs(app,{
	root:path.join(__dirname,'views'),
	layout:false,
	viewExt:'html',
	cache:false,
	debug:true,
	locals:this,
	begin:'<%',
	end:'%>'
});

app.listen(C.port);
console.log('server is runing in '+C.port+'...');
