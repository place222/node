var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nodeapp');

var BookSchema = mongoose.Schema({
    _id: Number,
    name: String,
    createUser: BookSchema
});

var Book = mongoose.model('Book', BookSchema);

var book = new Book({
    _id: 0,
    name: '书1',
    createUser: {
        _id: 1,
        name: '哈哈'
    }
});

book.save(function (err) {
    console.log(err);
})