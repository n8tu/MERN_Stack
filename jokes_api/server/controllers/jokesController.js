const Jokes = require('../models/jokesModel');

module.exports = {
    all: (req,res) => {
        Jokes.find({})
            .then(jokes => res.json(jokes))
            .catch(err => res.json(err))
    },
    find: (req,res) => {
        Jokes.findOne({_id:req.params._id})
            .then(joke => res.json(joke))
            .catch(err => res.json(err))
    },
    random: (req,res) => {
        Jokes.aggregate([ { $sample: { size: 1 } }] )
            .then(joke => res.json(joke))
            .catch(err => res.json(err))
    },
    create: (req,res) => {
        Jokes.create(req.body)
            .then(joke => res.json(joke))
            .catch(err => res.json(err))
    },
    update: (req,res) => {
        Jokes.updateOne({_id:req.params._id},{
            setup: req.body.setup,
            punchline: req.body.punchline,
        })
            .then(joke => res.json(joke))
            .catch(err => res.json(err))
    },
    delete: (req,res) => {
        Jokes.deleteOne({_id:req.params._id})
            .then(joke => res.json(joke))
            .catch(err => res.json(err))
    }


}
