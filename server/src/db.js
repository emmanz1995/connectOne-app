const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config()

const dbConfig = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION_STRING, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        console.log('Mongoose Connected SUCCESSFULLY');
    } catch(error) {
        console.log(error);
    }
}

module.exports = dbConfig;
