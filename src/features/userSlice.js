import { createSlice } from '@reduxjs/toolkit'

// initial user state
const initialState = {
  userName: null,
  userEmail: null,
  isAuthenticated:false,
 
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // functions to update state
    login: (state, action) => {
      // state.userName = action.payload.userName;
      // state.userEmail = action.payload.userEmail;
      state.displayName = action.payload.displayName;
      state.email = action.payload.email;
      state.uid = action.payload.uid;
      state.photoURL = action.payload.photoURL;
      state.isAuthenticated=true
    },
    logout: (state) => {
      // state.userName = null;
      // state.userEmail = null;
      state.displayName = null;
      state.email = null;
      // state.uid = null;
      // state.photoURL = null;
    },

  }
});

export const {login,logout} = userSlice.actions

//exporting user state
export const selectUserName = (state) => state.user.displayName
export const selectUserEmail = (state) => state.user.email
export const selectUserId = (state) => state.user.uid

// export const selectUser = (state) => state.user.user;
// export const selectUserName = (state) => state.user.userName
// export const selectUserEmail = (state) => state.user.userEmail
export default userSlice.reducer