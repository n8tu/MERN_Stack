const AuthorModel = require("../models/AuthorModel");
const {response} = require("express");

module.exports = {
    // Add an author to database .
    create: (request , response) => {
        AuthorModel.create(request.body)
            .then(authorData => response.json({
                message:"Your Author has been added successfully!",
                author: authorData,
            }))
            .catch(err => response.status(400).json(err))
    },
    // Get all authors from database .
    all: (request , response) => {
        AuthorModel.find({})
            .then(authorsData => response.json({
                message:"Authors fetched successfully!",
                authors: authorsData,
            }))
            .catch(err => response.status(400).json(err))
    },
    // Update an author in database
    update: (request , response ) => {
        // runValidators Command will start all validations in the Schema and process it
        AuthorModel.updateOne({_id:request.params._id},request.body, {runValidators:true})
            .then(authorData => response.json({
                message:"Your Author has been updated successfully!",
                author: authorData,
            }))
            .catch(err => response.status(400).json(err))
    },
    find: (request , response) => {
        AuthorModel.findOne({_id:request.params._id})
            .then(authorData => response.json({
                message:"Your Author has been found successfully!",
                author: authorData,
            }))
            .catch(err => response.status(400).json(err))
    },
    delete: (request , response) => {
        AuthorModel.deleteOne({_id:request.params._id})
            .then(data => response.json({
                message:"Your Author has been deleted successfully!",
                data: data,
            }))
            .catch(err => response.status(400).json(err))
    }

}

