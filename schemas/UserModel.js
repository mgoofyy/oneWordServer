var mongoose = require("mongoose");
var mongooseConnect = mongoose.connect("mongodb:http://127.0.0.1:oneWord");

/**
 * 简历用户信息模型
 * @type {mongoose}
 */
var UserModel = new mongoose.Schema({
	userInfo:{
		userName:String,
		userAvater:String,
		age:Number,
		birthday:Date,//ISO-8601 DATE
		userPlace:String,
		lastLoginTime:Date,
		createTime:Date
	},
	deviceInfo:{
		device:Array, // USER UAUAL DEVICE
		device_app_version:String
	}
});


/**
 * 每次保存调用本方法 
 * 更新用户的上次登陆时间和注册时间
 * @param  {[type]} next)
 */
UserModel.pre('save', function (next) {
    if (this.isNew) {
        this.userInfo.createTime = this.userInfo.lastLoginTime = Date.now();
    } else {
        this.userInfo.lastLoginTime = Date.now();
    }
    next();
});

/**
 * 用户信息的静态方法
 * updateUserProfile :=> 更改用户信息
 * @type {Object}
 */
UserModel.statics = {
	updateUserProfile: function(callBack) {

	}
}

/**
 * 暴露用户模型接口
 * @type {[type]}
 */
module.exports = UserModel;