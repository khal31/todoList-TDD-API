const TodoModel = require('../model/todo.model')

exports.createTodo = (req,res,next)=>{
    const result = TodoModel.create(req.body)
     res.status(201).json(result)

}


