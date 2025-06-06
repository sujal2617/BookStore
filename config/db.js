const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const dbconnect = async () => {
    try {
        await mongoose.connect(process.env.mongo_url);
        console.log('mongodb connected');
    } catch (error) {
        console.error('mongoddb connection failed:', error.message);
        process.exit(1);
    }
};

module.exports = dbconnect;
