const Product = require("../models/ProductModel")

module.exports = {
    create: (req , res) => {
        Product.create({
            title: req.body.title,
            price: req.body.price,
            description: req.body.description
        })
            .then(result => res.json(result))
            .catch( err => res.json(err));
    },
    all: (req , res) => {
        Product.find({})
            .then(products => res.json(products))
            .catch(err => res.json(err))
    },
    find: (req , res) => {
        Product.findOne({_id:req.params._id})
            .then(product => res.json(product))
            .catch(err => res.json(err))
    },
    delete: (req , res) => {
        Product.deleteOne({_id:req.params._id})
            .then(product => res.json(product))
            .catch(err => res.json(err))
    },
    update: (req , res) => {
        Product.updateOne({_id:req.params._id},{
            title: req.body.title,
            price: req.body.price,
            description: req.body.description
        })
            .then(result => res.json(result))
            .catch( (err) => res.json(err))
    },
}