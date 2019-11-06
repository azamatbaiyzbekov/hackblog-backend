const mongoose = require('mongoose');
const DB_URL = process.env.DB_URL || 'mongodb://azamat069:Azausf2010@ds241258.mlab.com:41258/heroku_p9hb3nq8';

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,

}).then(() => console.log('MongoDB connected successfully!')).catch((err) => console.log(`MongoDB connection error: ${err}`));


module.exports = {
    User: require('./User'),
    Post: require('./Post'),
};