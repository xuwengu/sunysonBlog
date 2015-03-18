var userModel = require('../model/user');

module.exports = function(app,body){
	return {
		login:function *(){
			var user = yield userModel.findOne({'name':body.name}).exec();
			if(user!=null){
				if(user.pswd==body.pswd){
					app.cookies.set('user',user.name);
					yield app.render('/backend/index',{
						title:'index',
						user:user
					});
				}else{
					app.redirect('/admin');
				}
			}else {
				app.redirect('/admin');
			}
		},
		register:function*(){
			var user = {
				name:body.name,
				email:body.email,
				pswd:body.pswd
			};
			console.log('body:'+JSON.stringify(body));
			new userModel(body).save(function(err,user){
				if(err){console.log(err);}
			});
			yield app.render('/backend/index',{
				title:'index'
			});
		}
	}
}