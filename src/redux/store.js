import logger from 'redux-logger';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactReducer from './contacts/contacts-reducer';

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

// eslint-disable-next-line
export default store;
