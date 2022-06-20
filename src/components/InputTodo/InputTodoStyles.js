import styled from 'styled-components';

const FormContainer = styled.form`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  border-radius: calc(0.5 * 100px);
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.38);
  justify-content: space-evenly;
`;

const InputText = styled.input`
  font-size: 1rem;
  font-weight: 400;
  width: 85%;
  padding-right: 5px;
  padding-left: 10px;
  border-radius: calc(0.5 * 100px);
  height: 45px;
  outline: none;
  border: none;
  ::placeholder {
    color: #000;
  }
`;

const SubmitBtn = styled.button`
  background: transparent;
  color: #5b5b5b;
  text-transform: capitalize;
  cursor: pointer;
  font-weight: 600;
  margin-right: 10px;
  height: 45px;
  outline: none;
  border: none;
`;

export { FormContainer, InputText, SubmitBtn };
