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
    like: {
        type: Array,
        required: false
    },
    image: {
        type: String,
        default: "https://res.cloudinary.com/emmanuel-cloud-storage/image/upload/v1637458305/goow4psmt5vuzuffjr7a.jpg"
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    }
},
    {
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
    timestamps: true
});

postSchema.virtual('comments', {
    ref: 'comments',
    foreignField: 'post',
    localField: '_id'
})

const Post = mongoose.model('post', postSchema);

module.exports = Post;
