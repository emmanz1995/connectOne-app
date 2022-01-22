const categories = require('../model/categories.model');
const expressAsyncHandler = require('express-async-handler');

const createCategory = expressAsyncHandler(async (req, res) => {
    const { name } = req?.body;
    try {
        const newCategory = await categories.create({ name })
        res?.json(newCategory)
    } catch(error) {
        res?.json(error)
    }
})

const getCategory = expressAsyncHandler(async (req, res) => {
    try {
        const category = await categories.find()
        res?.json(category)
    } catch(error) {
        res?.json(error)
    }
})

module.exports = { createCategory, getCategory }
