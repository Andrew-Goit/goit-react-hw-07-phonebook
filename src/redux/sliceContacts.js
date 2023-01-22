import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  deleteContacts,
  addContacts,
  filterContacts,
} from './operations';

// const сontacts = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },

  extraReducers: function (builder) {
    builder.addCase(fetchContacts.pending, handlePending);
    builder.addCase(fetchContacts.fulfilled, handleFulfilled);
    builder.addCase(fetchContacts.rejected, handleRejected);

    builder.addCase(addContacts.pending, handlePending);
    builder.addCase(addContacts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload)
    }); 
    builder.addCase(addContacts.rejected, handleRejected);

    builder.addCase(deleteContacts.pending, handlePending);
    builder.addCase(deleteContacts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(item => item.id === action.payload);
      state.items.splice(index, 1);
    });
    builder.addCase(deleteContacts.rejected, handleRejected);

    builder.addCase(filterContacts.pending, handlePending);
    builder.addCase(filterContacts.fulfilled, handleFulfilled);
    builder.addCase(filterContacts.rejected, handleRejected);
  },

  // reducers: {
  //   addContacts(state, action) {
  //     state.push(action.payload);
  //   },

  //   deleteContacts(state, action) {
  //     const index = state.findIndex(contact => contact.id === action.payload);
  //     state.splice(index, 1);
  //   },
  // },
});

// export const { addContacts, deleteContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;