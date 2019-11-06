const mongoose = require('mongoose');
const DB_URL = process.env.DB_URL || 'mongodb://user:usf1234@ds141208.mlab.com:41208/heroku_qxbn15w9';

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,

}).then(() => console.log('MongoDB connected successfully!')).catch((err) => console.log(`MongoDB connection error: ${err}`));


module.exports = {
    User: require('./User'),
    Post: require('./Post'),
};