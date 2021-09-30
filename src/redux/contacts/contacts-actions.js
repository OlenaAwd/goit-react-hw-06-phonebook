import actionTypes from './contacts-types';

const AddContact = (name, number) => ({
  type: actionTypes.ADD_CONTACT,
  payload: {
    name,
    number,
  },
});
const RemoveContact = contactId => ({
  type: actionTypes.REMOVE_CONTACT,
  payload: contactId,
});

const FilterContacts = value => ({
  type: actionTypes.FILTER_CONTACT,
  payload: value,
});

export default { AddContact, RemoveContact, FilterContacts };
