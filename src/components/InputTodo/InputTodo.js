import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';
import {
  FormContainer,
  InputText,
  SubmitBtn,
} from './InputTodoStyles';

const InputTodo = (props) => {
  const { addTodo } = props;
  const [title, setTitle] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo(title);
      setTitle('');
    } else {
      alert('Please write a Todo');
    }
  };
  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputText
        type="text"
        placeholder="Add Todo..."
        value={title}
        onChange={handleChange}
      />
      <SubmitBtn type="submit">
        <FaPlus />
      </SubmitBtn>
    </FormContainer>
  );
};

export default InputTodo;

InputTodo.propTypes = {
  addTodo: PropTypes.func,
};

InputTodo.defaultProps = {
  addTodo: () => {},
};
