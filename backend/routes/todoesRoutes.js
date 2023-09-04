const express = require('express');
const router = express.Router();
const {getTodos, setTodo, updateTodo, deleteTodo} = require('../controllers/todosController')

router.route('/').get(getTodos).post(setTodo)
router.route('/:id').put(updateTodo).delete(deleteTodo)

module.exports = router;
const setTodo = (req, res) => {
    if (!req.body.text) {
      res.status(400);
      throw new Error('Please add text field');
    }
    res.status(200).json({message: 'Set todo'})
  }