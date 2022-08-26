const mongoose = require('mongoose');

const JokesSchema = mongoose.Schema({
    setup: {
        type:String,
        required:true,
    },
    punchline: {
        type:String,
        required: true,
    }
}, {timestamps: true})

const Jokes = mongoose.model("Jokes",JokesSchema);

module.exports = Jokes;
