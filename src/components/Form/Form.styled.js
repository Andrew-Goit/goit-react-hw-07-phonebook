import styled from 'styled-components';

export const FormBox = styled.form`
  width: auto;
  margin-top: 10px;
  margin-bottom: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border: 1px solid #333;
  border-radius: 5px;
  background-color: #FAF7F5;
`;

export const Label = styled.label`
  font-weight: 500;
`;

export const Input = styled.input`
  font-size: 18px;
  margin-top: 5px;
  margin-bottom: 15px;
  padding: 5px;
  border: 1px solid #888;
  border-radius: 5px;
  &:focus-visible {
    outline: 1px solid #1D7CF5;
  }
`;

export const SubmitBtn = styled.button`
  width: 120px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  padding: 5px 10px;
  font-size: 15px;
  font-weight: 600;
  border-radius: 5px;
  border: 1px solid #888;
  background-color: #fff;
  box-shadow: 1px 2px 4px 1px #B7B7B7;
  color: #333;
  cursor: pointer;
  transition: background-color 200ms linear, color 200ms linear;
  &:hover {
    background-color: #1D7CF5;
    color: #eee;
  }
`;