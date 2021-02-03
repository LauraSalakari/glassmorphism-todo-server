require('dotenv').config();
const mongoose = require('mongoose');

let configOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false 
}

let MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/todo-server'

mongoose.connect(MONGODB_URI, configOptions)
    .then(() => {
        console.log('Yayyy Database "todo-server" is connected');
    })
    .catch(() => {
        console.log('Something went wrong!');
    })