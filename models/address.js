var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nodeapp');

var personSchema = mongoose.Schema({
    _id: Number,
    name: String,
    age: Number,
    stories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Story'
    }]
});

var storySchema = mongoose.Schema({
    _creator: {
        type: Number,
        ref: 'Person'
    },
    title: String,
    fans: [{
        type: Number,
        ref: 'Person'
    }]
});


var Story = mongoose.model('Story', storySchema);
var Person = mongoose.model('Person', personSchema);

//保存引用
var aaron = new Person({
    _id: 0,
    name: 'Aaron',
    age: 100
});

// aaron.save(function (err) {
//     if (err) return handleError(err);

//     var story1 = new Story({
//         title: 'Once upon a timex.',
//         _creator: aaron._id
//     });

//     story1.save(function (err) {
//         if (err) return handleError(err);
//     })
// });

Story.findOne({
        title: 'Once upon a timex.'
    })
    .populate('_creator')
    .exec(function (err, story) {
        if (err) return handleError(err);

        console.log('the creator is %s', story._creator.name);
    })