var express = require('express');
var router = express.Router();
var fs = require("fs");

function getCookie(cookie,name) { 
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr= cookie.match(reg)){
    	return unescape(arr[2]);
    } else {
    	return null;
    }
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  fs.writeFile('../Log.text', JSON.stringify(req.query)+'\n',{flag:'a'} ,function(err) {
  	if(err) console.log(err);
  });
  //res.send('respond with a resource');
  //res.render('index', { title: 'Express' });
	fs.readFile("../public/images/loading.gif", "binary", function(error, file) {
		if(error) {
			res.writeHead(500,{"Content-Type":"text/plain"});
			res.write(error +"\n");
			res.end();
		} else {
			var obj = {};
			obj["Content-Type"] = "image/gif";
			// if( !req.query.cookie || !getCookie(req.query.cookie,'_YS_userAccect')) {
			// 	obj["Set-cookie"] = ["_YS_userAccect=2016"+Math.random()];
			// }
			res.writeHead(200, obj);
			res.write(file,"binary");
			res.end();
		}
	});
});

router.get('/test', function(req, res) {
	setTimeout(function() {
		res.writeHead(200,{"Content-Type":"text/plain"});
		res.write('hahah' +"\n");
		res.end();
	},3000);
});

module.exports = router;
