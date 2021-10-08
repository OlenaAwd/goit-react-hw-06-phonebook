import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';
import { ADD_CONTACT, REMOVE_CONTACT, FILTER_CONTACT } from './contacts-types';

export const addContact = createAction(ADD_CONTACT, (name, number) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));
export const removeContact = createAction(REMOVE_CONTACT);
export const filterContact = createAction(FILTER_CONTACT);
