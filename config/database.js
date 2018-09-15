const mongoose = require ('mongoose');

const mongoUrl = 'mongodb://maxtk2:max123@ds251179.mlab.com:51179/books-api';

const connect = () => mongoose.connect(mongoUrl);

module.exports = {connect};