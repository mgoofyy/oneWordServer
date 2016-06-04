var mongoose = require('mongoose');

var UserSchema = require('./../schemas/UserModel');
var User = mongoose.model('users', UserSchema);

module.exports = User;