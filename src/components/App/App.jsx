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
import {
  selectError,
  selectFilterValue,
  selectLoading,
  selectContacts,
} from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <Header>PONEBOOK</Header>
      <Section>
        <Container>
          <ContactForm />
          {loading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          <ContactList>
            {contacts.length === 0 ? (
              <Notification>There are no any contacts ... </Notification>
            ) : (
              <Filter />
            )}
          </ContactList>
        </Container>
      </Section>
      <Toaster toastOptions={toastOptions} />
    </>
  );
};
