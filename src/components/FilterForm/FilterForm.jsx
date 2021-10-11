import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contacts-actions';
import {getFilter} from '../../redux/contacts/contacts-selectors';
import css from './FilterForm.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);

  const onChange = e => dispatch(changeFilter(e.target.value));
 
  return (
    <label className={css.filterLabel}>
      Find contacts by name
      <input
        className={css.filterInput}
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Enter contact's name"
      />
    </label>
  );
}


