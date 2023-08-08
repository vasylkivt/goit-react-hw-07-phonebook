import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import {
  Header,
  ContactForm,
  Section,
  ContactList,
  Container,
  Filter,
  Notification,
} from 'components';
import { toastOptions } from 'styles';
import { fetchContacts } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <Header>PONEBOOK</Header>
      <Section>
        <Container>
          <ContactForm />
          <ContactList />
        </Container>
      </Section>
      <Toaster toastOptions={toastOptions} />
    </>
  );
};
