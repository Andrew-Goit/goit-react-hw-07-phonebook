import { nanoid } from 'nanoid';
import { FormBox, Label, Input, SubmitBtn } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

export const Form = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(selectContacts);

  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.target;
    if (items && items.length > 0) {
      items.forEach(({ name }) => {
        if (form.elements.name.value.toLowerCase() === name.toLowerCase()) {
          alert(`${name} is already in contacts`);
          // form.reset();
        }      
      });
      // return;
    } 
    dispatch(
      addContacts({
        id: nanoid(),
        name: form.elements.name.value,
        phone: form.elements.phone.value,
      })
    );
    form.reset();
  };

  return (
    <FormBox action="" onSubmit={handleSubmit}>
      <Label htmlFor="name">Name</Label>
      <Input
        id="name"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <Label htmlFor="tel">Number</Label>
      <Input
        id="tel"
        type="tel"
        name="phone"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <SubmitBtn type="submit">Add contact</SubmitBtn>
    </FormBox>
  );
};