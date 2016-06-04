var express = require('express');
var app = express();

app.listen(3000);/**
 * login Post
 * BASE URL "api/v1/user/login"
 * @param  {[type]} callBack [description]
 * @return {[type]}          [description]
 */
exports.login = function login(callBack) {
	app.get('/api/v1/user/login',function(req,res){
		callBack(req,res);
	})
}
/**
 * sign up POST
 * @param  {callBack} callBack 执行回调
 * @return {[type]}          [description]
 */
exports.sign = function sign(callBack) {
	app.post('/api/v1/user/sign',function(req,res){
		res.send("sign up");
	})
}
