const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const postSchema = new Schema({
    user:
        {
            type: Schema.Types.ObjectId,
            ref: 'User',

        },

    title: {
        type: String,
        required: true,
        maxlength: [300, 'Max length exceeded'],
    },
    content: {
        type: String,
        required: true,
        maxlength: [3000, 'Max length exceeded'],
    },
    date_posted: {
        type: Date,
        dafault: Date.now,
    },

})

const Post = mongoose.model('Post', postSchema);

module.exports = Post;