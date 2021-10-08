import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from '../../redux/contacts/contacts-actions';
import {getFilter} from '../../redux/contacts/contacts-selectors';
import css from './FilterForm.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  // const contacts = useSelector(getContacts);

  <label className={css.filterLabel}>
    Find contacts by name
    <input
      className={css.filterInput}
      type="text"
      value={filter}
      onChange={e => dispatch(filterContact(e.target.value))}
    />
  </label>
};

export default Filter;
