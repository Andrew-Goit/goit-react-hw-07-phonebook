import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'redux/sliceContacts';
import {
  ContactList,
  ContactListItem,
  ContactName,
  ContactNumber,
  DeleteButton,
} from './Contacts.styled';

export const Contacts = () => {
  let contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const handleOnClick = evt => {
    dispatch(deleteContacts(evt.currentTarget.id));
  };

  const filter = useSelector(state => state.filter.value);
  if (filter !== '')
    contacts = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });

  return (
    <ContactList>
      {contacts.map(el => {
        const { name, number, id } = el;
        return (
          <ContactListItem key={id}>
            <ContactName>{name}</ContactName>
            <ContactNumber>{number}</ContactNumber>
            <DeleteButton id={id} type="button" onClick={handleOnClick}>
              Delete
            </DeleteButton>
          </ContactListItem>
        );
      })}
    </ContactList>
  );
};

