const TodoModel = require('../model/todo.model')



exports.createTodo = async (req, res, next) => {
  try {
    const todo = await TodoModel.create(req.body);
    return res.status(201).json(todo);
  } catch (err) {
    return next(err);
  }
};



