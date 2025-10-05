import Todo from "../models/Todo.js";
//CREATE
export const createTodo = async (req, res) => {
  try {
    const newTodo = await Todo.create(req.body);
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// READ
export const getTodos = async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
};

// UPDATE
export const updateTodo = async (req, res) => {
  const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(todo);
};

// DELETE
export const deleteTodo = async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: "Todo deleted successfully" });
};
