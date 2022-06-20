import styled from 'styled-components';

const Todo = styled.li`
  font-size: 1.2rem;
  list-style-type: none;
  padding: 17px 0px;
  border-bottom: 1px solid #eaeaea;
`;

const Checkbox = styled.input`
  margin-right: 15px;
`;

const Button = styled.button`
  font-size: 13px;
  background: #f1f3f4;
  border: none;
  cursor: pointer;
  float: right;
  outline: none;
  border-radius: 100px;
  height: 50px;
  width: 50px;
  margin: -10px 0 0 10px;
`;

const TitleCompleted = styled.span`
  font-style: italic;
  color: #595959;
  opacity: 0.4;
  text-decoration: line-through;
`;

const InputText = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #dfdfdf;
  }
`;

export {
  Todo, Checkbox, Button, TitleCompleted, InputText,
};
