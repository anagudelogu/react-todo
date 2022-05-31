import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import {
  Todo,
  Checkbox,
  Button,
  TitleCompleted,
  InputText,
} from './TodoItemStyles';

const TodoItem = (props) => {
  const {
    todo, handleChange, delTodo, updateTodo,
  } = props;
  const { title, completed, id } = todo;
  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    setEditing(true);
  };

  const edit = (bool) => {
    const mode = {};
    if (bool) {
      mode.display = 'none';
    }
    return mode;
  };

  const handleUpdated = (e) => {
    if (e.key === 'Enter') {
      setEditing(false);
    }
  };

  return (
    <Todo>
      <div onDoubleClick={handleEditing} style={edit(editing)}>
        <Checkbox
          type="checkbox"
          checked={completed}
          onChange={() => handleChange(id)}
        />
        {completed ? <TitleCompleted>{title}</TitleCompleted> : title}
        <Button type="button" onClick={() => delTodo(id)}>
          <FaTrash />
        </Button>
      </div>
      <InputText
        type="text"
        style={edit(!editing)}
        value={title}
        onChange={(e) => {
          updateTodo(e.target.value, id);
        }}
        onKeyDown={handleUpdated}
      />
    </Todo>
  );
};

export default TodoItem;

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    completed: PropTypes.bool,
  }),
  handleChange: PropTypes.func,
  delTodo: PropTypes.func,
  updateTodo: PropTypes.func,
};

TodoItem.defaultProps = {
  todo: {},
  handleChange: () => {},
  delTodo: () => {},
  updateTodo: () => {},
};
