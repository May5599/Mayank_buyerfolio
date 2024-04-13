import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../featureForm/userSlice';
import formReducer from '../reducers'; // Adjust the path to point to reducers.js


export const store = configureStore({
  reducer: {
    user: userReducer,
    form: formReducer, // Add the form-related reducer to the root reducer
  },
});
