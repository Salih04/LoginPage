import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    // Disable scrolling
    document.body.style.overflow = 'hidden';

    const fetchTodos = async () => {
      const response = await axios.get('http://localhost:3000/api/todos');
      setTodos(response.data);
    };

    fetchTodos();

    // Clean up to enable scrolling again if needed
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const addTodo = async () => {
    const response = await axios.post('http://localhost:3000/api/todos', { title });
    setTodos([...todos, response.data]);
    setTitle('');
  };

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:3000/api/todos/${id}`);
    setTodos(todos.filter(todo => todo._id !== id));
  };

  const toggleComplete = async (id, completed) => {
    const response = await axios.put(`http://localhost:3000/api/todos/${id}`, { completed: !completed });
    setTodos(todos.map(todo => (todo._id === id ? response.data : todo)));
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      height: '100vh', 
      width: '100vw', 
      justifyContent: 'center', 
      backgroundImage: 'url("https://lavinya.net/wp-content/uploads/2022/09/51b11b-karanlik-puslu-orman-yolu-4k-road-dark-mist-forest-scaled.jpg")',
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      backgroundRepeat: 'no-repeat', 
      position: 'relative' 
    }}>
      <h1 style={{ 
        textAlign: 'center', 
        color: 'white', 
        textShadow: '2px 2px 4px rgba(0,0,0,0.5)', 
        margin: 0 
      }}>
        To-Do List
      </h1>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        backgroundColor: 'rgba(255, 255, 255, 0.8)', 
        padding: '20px', 
        borderRadius: '10px' 
      }}>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          placeholder="Add new To-Do" 
          style={{ 
            padding: '10px', 
            marginBottom: '10px', 
            width: '300px', 
            textAlign: 'center', 
            borderRadius: '5px' 
          }}
        />
        <button 
          onClick={addTodo} 
          style={{ 
            color: 'white', 
            backgroundColor: 'gray', 
            padding: '10px 20px', 
            textAlign: 'center', 
            cursor: 'pointer', 
            border: 'none', 
            borderRadius: '5px' 
          }}
        >
          Add
        </button>
        <ul style={{ 
          listStyleType: 'none', 
          padding: 0, 
          marginTop: '20px', 
          width: '300px', 
          textAlign: 'center' 
        }}>
          {todos.map(todo => (
            <li key={todo._id} style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              padding: '10px 0', 
              borderBottom: '1px solid #ccc', 
              backgroundColor: 'rgba(255, 255, 255, 0.8)', 
              borderRadius: '5px', 
              margin: '5px 0' 
            }}>
              <span 
                style={{ 
                  textDecoration: todo.completed ? 'line-through' : 'none', 
                  cursor: 'pointer', 
                  color: 'black' ,
                  marginLeft: 5
                }}
                onClick={() => toggleComplete(todo._id, todo.completed)}
              >
                {todo.title}
              </span>
              <div>
                <button 
                  onClick={() => toggleComplete(todo._id, todo.completed)} 
                  style={{ 
                    color: 'white', 
                    backgroundColor: 'green', 
                    padding: '5px 10px', 
                    cursor: 'pointer', 
                    border: 'none', 
                    borderRadius: '5px', 
                    marginRight: '10px' 
                  }}
                >
                  Done
                </button>
                <button 
                  onClick={() => deleteTodo(todo._id)} 
                  style={{ 
                    color: 'white', 
                    backgroundColor: '#dc3545', 
                    padding: '5px 10px', 
                    cursor: 'pointer', 
                    border: 'none', 
                    borderRadius: '5px', 
                    marginRight: 10
                  }}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
