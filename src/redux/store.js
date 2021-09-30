import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = { phonebook: 0 };
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'phonebook/AddContact':
      return {
        phonebook: state.phonebook + payload,
      };
    case 'phonebook/RemoveContact':
      return {
        phonebook: state.phonebook - payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer, composeWithDevTools(applyMiddleware([])));

export default store;
