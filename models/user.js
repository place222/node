var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nodeapp');

var UserSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    passWord: String,
    isActive: Boolean,
    isDelete: Boolean,
    createTime: {
        type: Date,
        default: Date.now
    },
    userInfomation: {
        phone: String,
        id: String,
        nickName: String,
        gender: Boolean,
        jobTitle: String,
        duties: String,
        nation: String,
        highestEdu: String,
        graduateSchool: String,
        major: String,
        userLogo: String
    }
});

var User = mongoose.model('User', UserSchema);


module.exports = User;