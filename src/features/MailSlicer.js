import { createSlice } from '@reduxjs/toolkit';


export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    openMessageBox : false,
    selectedEmail: null
  },

  reducers: {
    openSendMessageBox: state => {
      state.openMessageBox= true
    },

    closeSendMessageBox: state => {
      state.openMessageBox = false
    },

    setEmailListings: (state, action) => {
      state.selectedEmail = action.payload 
    }
    
  },
});

export const { setEmailListings, openSendMessageBox, closeSendMessageBox } = mailSlice.actions;

// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };


export const selectSendMessageBox = state => state.mail.openMessageBox ;
export const selectEmailListings = state => state.mail.selectedEmail ;


export default mailSlice.reducer;
