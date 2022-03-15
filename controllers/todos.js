const Todo = require('../models/Todo')
let {ObjectId} = require('mongodb');
const { db } = require('../models/Todo');

module.exports = {
    getTodos: async (req,res)=>{
        try{
            const todoItems = await Todo.find()
            const itemsLeft = await Todo.countDocuments({completed: false})
            res.render('todos.ejs', {todos: todoItems})
        }catch(err){
            console.log(err)
        }
    },
    createTodo: async (req, res)=>{
        try{
            await Todo.create({todo: req.body.todoItem, completed: false})
            console.log('Todo has been added!')
            res.redirect('/todos')
        }catch(err){
            console.log(err)
        }
    },
    updateTodo: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id: new ObjectId(req.body.id)}, {$set: {todo: req.body.todo}});
            res.redirect('/todos')
        }catch(err){
            console.log(err)
        }   
    },
    deleteTodo: async (req, res)=>{
        try{
            await Todo.deleteOne({_id: new ObjectId(req.body.id)})
            console.log('Deleted Todo')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}