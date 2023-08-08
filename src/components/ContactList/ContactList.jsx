import { List, ListWrap } from './ContactList.style';
import { ContactItem, Filter, Notification } from 'components';

import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectLoading,
  selectVisibleContacts,
} from 'redux/selectors';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const isContactEmpty = contacts.length === 0;
  const isVisibleContactsEmpty = visibleContacts.length === 0;

  return (
    <ListWrap>
      {!isContactEmpty && <Filter />}

      <List>
        {visibleContacts.map(contact => (
          <ContactItem contact={contact} key={contact.id} />
        ))}
      </List>

      {!loading && !isContactEmpty && isVisibleContactsEmpty && (
        <Notification>
          There are no contacts with this name here...
        </Notification>
      )}

      {!error && !loading && isContactEmpty && (
        <Notification>There are no any contacts ...</Notification>
      )}

      {loading && (
        <Notification $position={'absolute'}>Loading...</Notification>
      )}

      {error && <Notification>{error}</Notification>}
    </ListWrap>
  );
};
