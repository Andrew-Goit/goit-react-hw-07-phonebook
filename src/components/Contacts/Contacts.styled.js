import styled from 'styled-components';

export const ContactList = styled.ul``;

export const ContactListItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const ContactName = styled.p`
  margin-right: 15px;
  font-weight: 600;
`;

export const ContactNumber = styled.p`
  margin-right: 40px;
  margin-left: auto;
`;

export const DeleteButton = styled.button`
  height: 26px;
  padding: 5px 10px;
  font-size: 15px;
  font-weight: 600;
  border-radius: 5px;
  border: 1px solid #888;
  background-color: #fff;
  box-shadow: 1px 0px 4px 1px #B7B7B7;
  color: #333;
  cursor: pointer;
  transition: background-color 200ms linear, color 200ms linear;
  &:hover {
    background-color: #1D7CF5;
    color: #eee;
  }
`;