const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true,"Name is required!"],
        // custom validations
        validate:{
            validator: (value) => {
                if(value.length < 3){
                    throw new Error("Name character must be at least 3")
                }
            }
        }
    }
} , {timestamps: true});

const Author = mongoose.model('Authors', AuthorSchema);
module.exports = Author;