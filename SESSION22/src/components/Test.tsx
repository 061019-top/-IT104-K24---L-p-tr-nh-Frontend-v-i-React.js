import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckSquare, Square, Edit2, Trash2 } from "lucide-react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Code a todo list", completed: true },
    { id: 2, text: "Learn React Typescript", completed: false },
  ]);
  const [input, setInput] = useState<string>("");
  const [editId, setEditId] = useState<number | null>(null);

  const addTodo = () => {
    if (!input.trim()) return;

    if (editId) {
      setTodos(
        todos.map((t) => (t.id === editId ? { ...t, text: input } : t))
      );
      setEditId(null);
    } else {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
    }
    setInput("");
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const editTodo = (id: number, text: string) => {
    setInput(text);
    setEditId(id);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-rose-400 shadow-xl rounded-2xl p-6 w-80 text-white"
      >
        <h1 className="text-2xl font-bold mb-2">Todo List</h1>
        <p className="text-sm mb-4 opacity-80">Get things done, one item at a time.</p>

        <div className="space-y-3">
          {todos.map((todo) => (
            <motion.div
              key={todo.id}
              className="flex justify-between items-center bg-rose-300 p-2 rounded-xl"
              whileHover={{ scale: 1.02 }}
            >
              <div
                className={`flex items-center gap-2 cursor-pointer select-none ${
                  todo.completed ? "line-through opacity-70" : ""
                }`}
                onClick={() => toggleTodo(todo.id)}
              >
                {todo.completed ? (
                  <CheckSquare className="w-5 h-5" />
                ) : (
                  <Square className="w-5 h-5" />
                )}
                <span>{todo.text}</span>
              </div>

              <div className="flex gap-2">
                <button onClick={() => editTodo(todo.id, todo.text)}>
                  <Edit2 className="w-4 h-4" />
                </button>
                <button onClick={() => deleteTodo(todo.id)}>
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Input thêm / sửa */}
        <div className="mt-4 flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add to the todo list"
            className="flex-1 rounded-xl p-2 text-black outline-none"
          />
          <button
            onClick={addTodo}
            className="bg-rose-500 px-3 py-2 rounded-xl shadow hover:bg-rose-600"
          >
            {editId ? "Update" : "Add"}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default TodoApp;



// fontsoem
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Code a todo list", completed: true },
    { id: 2, text: "Learn React Typescript", completed: false },
  ]);
  const [input, setInput] = useState<string>("");
  const [editId, setEditId] = useState<number | null>(null);

  const addTodo = () => {
    if (!input.trim()) return;

    if (editId) {
      setTodos(
        todos.map((t) => (t.id === editId ? { ...t, text: input } : t))
      );
      setEditId(null);
    } else {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
    }
    setInput("");
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const editTodo = (id: number, text: string) => {
    setInput(text);
    setEditId(id);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ width: "22rem", background: "#f87171", color: "white" }}>
        <h1 className="h4 mb-2">Todo List</h1>
        <p className="small mb-4 opacity-75">Get things done, one item at a time.</p>

        <div className="mb-3">
          {todos.map((todo) => (
            <div key={todo.id} className="d-flex justify-content-between align-items-center bg-danger bg-opacity-50 rounded p-2 mb-2">
              <div
                className={`d-flex align-items-center ${todo.completed ? "text-decoration-line-through opacity-75" : ""}`}
                role="button"
                onClick={() => toggleTodo(todo.id)}
              >
                <i className={`me-2 ${todo.completed ? "fas fa-check-square" : "far fa-square"}`}></i>
                <span>{todo.text}</span>
              </div>

              <div className="d-flex gap-2">
                <button className="btn btn-sm btn-light" onClick={() => editTodo(todo.id, todo.text)}>
                  <i className="fas fa-edit"></i>
                </button>
                <button className="btn btn-sm btn-dark" onClick={() => deleteTodo(todo.id)}>
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Input thêm / sửa */}
        <div className="d-flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add to the todo list"
            className="form-control"
          />
          <button
            onClick={addTodo}
            className="btn btn-light fw-bold"
          >
            {editId ? <i className="fas fa-sync-alt"></i> : <i className="fas fa-plus"></i>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
