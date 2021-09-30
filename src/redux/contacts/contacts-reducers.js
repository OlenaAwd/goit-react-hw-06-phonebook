import { combineReducers } from 'redux';
import actionTypes from './contacts-types';

// const items = createReducer([], {
//   [actionTypes.ADD_CONTACT]: (state, { payload }) => [...state, payload],
//   [actionTypes.REMOVE_CONTACT]: (state, { payload }) =>
//     state.filter(({ id }) => id !== payload),
// });

const items = (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_CONTACT:
      return [...state, payload];
    case actionTypes.REMOVE_CONTACT:
      return state.filter(({ id }) => id !== payload);
    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case actionTypes.FILTER_CONTACT:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});

// const filter = createReducer('', {
//   [actionTypes.FILTER_CONTACT]: (_, { payload }) => payload,
// });

// export default combineReducers({
//   items,
//   filter,
// });
