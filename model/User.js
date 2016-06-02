var mongoose = require('mongoose');

var UserSchema = require('../schemas/UserModel');
var User = mongoose.model('UserInfo', UserSchema);

module.exports = User;