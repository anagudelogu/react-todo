import PropTypes from 'prop-types';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = (props) => {
  const {
    todos, handleChange, delTodo, updateTodo,
  } = props;

  const displayTodos = (todos) => todos.map((todo) => (
    <TodoItem
      key={todo.id}
      todo={todo}
      handleChange={handleChange}
      delTodo={delTodo}
      updateTodo={updateTodo}
    />
  ));

  return <ul>{displayTodos(todos)}</ul>;
};

export default TodoList;

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      completed: PropTypes.bool,
    }),
  ),
  handleChange: PropTypes.func,
  delTodo: PropTypes.func,
  updateTodo: PropTypes.func,
};

TodoList.defaultProps = {
  todos: [],
  handleChange: () => {},
  delTodo: () => {},
  updateTodo: () => {},
};
