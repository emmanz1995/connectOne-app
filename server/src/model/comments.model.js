const mongoose = require('mongoose');

const commentsSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: true,
        unique: true
    },
    replyTo: {
        type: Array,
        required: false
    },
    reader: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post'
    }
}, {
    toJSON: {virtuals: true},
    toObject: {virtuals: true},
    timestamps: true
});

const Comments = mongoose.model('comments', commentsSchema);

module.exports = Comments;
