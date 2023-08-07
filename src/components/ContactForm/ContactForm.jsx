import { Formik } from 'formik';
import {
  Form,
  Input,
  InputLabel,
  InputWrap,
  PersonIcon,
  TelephoneIcon,
} from './ContactForm.style';
import { Button } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';

import { toast } from 'react-hot-toast';
import { selectContacts } from 'redux/selectors';
import { useRef } from 'react';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contactList = useSelector(selectContacts);

  const inputNameRef = useRef();

  const onSubmit = (formData, action) => {
    if (
      contactList.find(
        ({ name }) => name.toLowerCase() === formData.name.toLowerCase()
      )
    ) {
      toast.error(`${formData.name}  is already in contacts. `);
      return;
    }
    if (contactList.find(({ phone }) => phone === formData.phone)) {
      toast.error(`Number "${formData.phone}" is already in contacts. `);
      return;
    }

    toast.success(`${formData.name} added to your contact list.`);
    dispatch(addContact({ ...formData }));

    action.resetForm();
    inputNameRef.current.focus();
  };

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          phone: '',
        }}
        onSubmit={onSubmit}
      >
        <Form>
          <InputWrap>
            <PersonIcon />
            <Input
              innerRef={el => {
                inputNameRef.current = el;
              }}
              autoComplete="off"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <InputLabel>Name</InputLabel>
          </InputWrap>
          <InputWrap>
            <TelephoneIcon />
            <Input
              autoComplete="off"
              type="tel"
              name="phone"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <InputLabel>Number</InputLabel>
          </InputWrap>
          <Button type="submit">Add contact</Button>
        </Form>
      </Formik>
    </>
  );
};
