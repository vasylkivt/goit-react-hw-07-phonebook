import { List, ListWrap } from './ContactList.style';
import { ContactItem, Notification } from 'components';

import { useSelector } from 'react-redux';
import { selectContacts, selectVisibleContacts } from 'redux/selectors';

export const ContactList = ({ children }) => {
  const visibleContacts = useSelector(selectVisibleContacts);
  const contacts = useSelector(selectContacts);
  console.log('visibleContacts:', visibleContacts);

  return (
    <ListWrap>
      {children}

      {contacts.length !== 0 && (
        <>
          <List>
            {visibleContacts.map(contact => (
              <ContactItem contact={contact} key={contact.id} />
            ))}
          </List>

          {visibleContacts.length === 0 && (
            <Notification $margin={'0 auto'}>
              There are no contacts with this name here...
            </Notification>
          )}
        </>
      )}
    </ListWrap>
  );
};
