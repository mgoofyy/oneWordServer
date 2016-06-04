var User = require('./route/UserRoute');
var UserModel = require('./model/User');

// var userSign = User.UserLogin;
User.login(function(req,res){
	// res.send(res.statusCode);
	UserModel.findByName("goofyy",function(error,user){
		if (error) {res.send("no user")}
		console.log(error);
			res.send(user.name);
	})
});