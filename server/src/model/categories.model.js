const mongoose = require('mongoose');
const { Schema } = mongoose;

const categoriesSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
}, { timestamps: true });

const categories = mongoose.model('categories', categoriesSchema);

module.exports = categories;
