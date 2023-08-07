import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectFilterValue = state => state.filter;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilterValue],
  (items, filter) =>
    items.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
);

// export const selectVisibleContacts = ({ contacts: { items }, filter }) => {
//   if (!filter) return items;

//   return items.filter(item =>
//     item.name.toLowerCase().includes(filter.toLowerCase())
//   );
// };
