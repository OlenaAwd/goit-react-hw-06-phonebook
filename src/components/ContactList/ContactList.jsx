import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-actions';
import { getAddedContacts } from '../../redux/contacts/contacts-selectors';
import css from './ContactList.module.css';

export default function ContactList() {
  const dispatch = useDispatch();
  const addedContacts = useSelector(getAddedContacts);

  const onRemoveContact = id => dispatch(deleteContact(id));

  return (
    <ul className={css.list}>
      {addedContacts.map(({ id, name, number }) => (
        <li className={css.listItem} key={id}>
          <span className={css.listItemText}>{name}:</span>
          <span className={css.listItemText}>{number}</span>
          <button
            className={css.button}
            type="button"
            onClick={() => onRemoveContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

