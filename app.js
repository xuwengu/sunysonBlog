var koa = require('koa');
var path = require('path');
var ejs = require('koa-ejs');
var serve = require('koa-static');
var router = require('koa-router');
var session = require('koa-session');
var frontend =require('./routes/frontend');
var system =require('./routes/system');
var logger = require('koa-logger');
var flash = require('koa-flash');
var parse = require('co-body');
var conditional =require('koa-conditional-get');
var etag = require('koa-etag');
var markdown = require('markdown').markdown;

var blogModel = require('./model/blog');
var userModel = require('./model/user');
var app = koa();

app.use(conditional());
app.use(etag());

//app.use(logger());
app.use(session(app));

app.use(serve(__dirname+'/public',{maxage:60*60*24*15}));
app.use(flash());
app.keys = ['user'];
global.R = {};
global.F = {};

/*登录拦截*/
app.use(function *(next){
	var url = this.url.toLowerCase();
	if(url.indexOf('admin')>=0){
		if(url != '/admin/login'&&!this.session.user){
			this.redirect('/admin/login');
		}
	};
	yield next;
});


app.use(function *(next){
	yield next;
});
app.use(router(app));

/*后台路由*/
system(app);

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

app.listen(80);
console.log('server is runing in 3000...')