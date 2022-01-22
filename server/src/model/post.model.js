const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    content: {
        type: String,
        required: true,
    },
    published: {
        type: Boolean,
        default: false
    },
    categories: {
        type: Array,
        required: false
    },
    image: {
        type: String,
        default: ""
    }
}, { timestamps: true });

const Post = mongoose.model('post', postSchema);

module.exports = Post;
