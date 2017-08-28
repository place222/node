var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nodeapp');

var UserSchema = mongoose.Schema({
    username: String,
    password: String
});

var User = mongoose.model('User', UserSchema);

module.exports = User;
