const mongo = require('mongoose');
const Schem = mongo.Schema

const blogSchem = new Schem({
    number:{
        type: Number,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    }
})
const Test3 = mongo.model('Test3', blogSchem)
module.exports = Test3