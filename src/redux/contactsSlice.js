import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], loading: false, error: null },

  extraReducers: {
    // fetchContacts

    [fetchContacts.pending](state) {
      state.loading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.items = action.payload;
      state.loading = false;
      state.error = null;
    },
    [fetchContacts.rejected](state, action) {
      state.loading = false;
      state.error = action.payload;
    },

    // addContact

    [addContact.pending](state) {
      state.loading = true;
    },
    [addContact.fulfilled](state, action) {
      state.items.push(action.payload);
      state.loading = false;
      state.error = null;
    },
    [addContact.rejected](state, action) {
      state.loading = false;
      state.error = action.payload;
    },

    // deleteContact

    [deleteContact.pending](state) {
      state.loading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.items = state.items.filter(item => item.id !== action.payload.id);
      state.loading = false;
      state.error = null;
    },
    [deleteContact.rejected](state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
