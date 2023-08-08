import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { Header, ContactForm, Section, ContactList } from 'components';
import { toastOptions } from 'styles';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Header>PONEBOOK</Header>
      <Section>
        <ContactForm />
        <ContactList />
      </Section>
      <Toaster toastOptions={toastOptions} />
    </>
  );
};
