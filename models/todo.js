import mongoose from "mongoose";
const todoSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    
},{timestamps: true})

module.exports =  mongoose.models.todo || mongoose.model('todo', todoSchema);