import styled from 'styled-components';

export const FilterBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 500;
  margin-top: 15px;
`;

export const Input = styled.input`
  width: 200px;
  font-size: 15px;
  margin-top: 10px;
  margin-bottom: 25px;
  margin-left: auto;
  margin-right: auto;
  padding: 5px;
  border: 1px solid #888;
  border-radius: 5px;
  &:focus-visible {
    outline: 1px solid #4b98f5;
  }
`;