import {Form} from './Form/Form';
import {Filter} from './Filter/Filter';
import {Contacts} from './Contacts/Contacts';
import { AppBox } from './App.styled';

export const App = () => {
  return (
    <AppBox>
      <h2>Phonebook</h2>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <Contacts />
    </AppBox>
  );
};
