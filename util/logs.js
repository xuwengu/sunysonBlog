var fs = require('fs');
var path = require('path');

module.exports = function(){

	return function* (next){
		var log = {
			ip:this.ip,
			url:this.path,
			method:this.method,
			referer:this.header['referer'] || '-',
			userAgent:this.header['user-agent'] || '-',
			time:F().date.format(F().date.time(),'yyyy年mm月dd日 h:i:s')
		};
		var b = '';
		for(x in log){
			b += log[x] + ' | ';
		}
		
		if(!fs.existsSync(path.dirname(C.logPath))){
			fs.mkdirSync(path.dirname(C.logPath));
			fs.createWriteStream(C.logPath, { flags: 'a' }).write(b+'\n');
		}else{
			fs.createWriteStream(C.logPath, { flags: 'a' }).write(b+'\n');
		}

		return yield next;
	}
}