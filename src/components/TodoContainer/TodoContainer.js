import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Container, InnerContainer } from './TodoContainerStyles';
import TodoList from '../TodoList/TodoList';
import Header from '../Header/Header';
import InputTodo from '../InputTodo/InputTodo';

const TodoContainer = () => {
  const getExistingTodos = () => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    return savedTodos || [];
  };
  const [todos, setTodos] = useState(getExistingTodos());

  useEffect(() => {
    const temp = JSON.stringify(todos);
    localStorage.setItem('todos', temp);
  }, [todos]);

  const handleChange = (id) => {
    setTodos((prevTodos) => {
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    });
  };

  const delTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const updateTodo = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            title: updatedTitle,
          };
        }
        return todo;
      }),
    );
  };

  return (
    <Container>
      <InnerContainer>
        <Header />
        <InputTodo addTodo={addTodo} />
        <TodoList
          todos={todos}
          handleChange={handleChange}
          delTodo={delTodo}
          updateTodo={updateTodo}
        />
      </InnerContainer>
    </Container>
  );
};

export default TodoContainer;
