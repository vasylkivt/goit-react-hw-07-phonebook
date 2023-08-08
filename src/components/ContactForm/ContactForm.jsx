import { Formik } from 'formik';
import { useRef } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import {
  ErrorsMessageInput,
  Form,
  Input,
  InputLabel,
  InputWrap,
  PersonIcon,
  TelephoneIcon,
} from './ContactForm.style';
import { Button } from 'components';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

const ContactFormScheme = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
    .max(40),
  phone: Yup.string().matches(
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
    'Phone number is not valid'
  ),
});

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
    dispatch(addContact(formData));
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
        validationSchema={ContactFormScheme}
      >
        {({ errors, touched }) => (
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
                required
              />
              <InputLabel>Contact name</InputLabel>
              {errors.name && touched.name && (
                <ErrorsMessageInput>{errors.name}</ErrorsMessageInput>
              )}
            </InputWrap>
            <InputWrap>
              <TelephoneIcon />
              <Input autoComplete="off" type="tel" name="phone" required />
              <InputLabel>Phone number</InputLabel>
              {errors.phone && touched.phone && (
                <ErrorsMessageInput>{errors.phone}</ErrorsMessageInput>
              )}
            </InputWrap>

            <Button type="submit">Add contact</Button>
          </Form>
        )}
      </Formik>
    </>
  );
};
