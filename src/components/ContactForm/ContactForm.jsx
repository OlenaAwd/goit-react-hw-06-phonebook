import { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/contacts-actions';
import { getContacts } from '../../redux/contacts/contacts-selectors';
import css from './ContactForm.module.css';
import { toast } from 'react-hot-toast';
import shortid from 'shortid';


export default function ContactForm() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameId = useRef(shortid.generate());
  const numberId = useRef(shortid.generate());

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;

      case 'number':
        setNumber(e.target.value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (contacts.find(con => con.name.toLowerCase() === name.toLowerCase())) {
      toast(`'${name}' is alresdy in contacts`, {
        icon: '📞',
        style: {
          borderRadius: '10px',
          background: '#666',
          color: '#fff',
        },
      });
      return;
    }

    if (contacts.find(con => con.number === number)) {
      toast(`'${number}' is alresdy in contacts`, {
        icon: '📞',
        style: {
          borderRadius: '10px',
          background: '#666',
          color: '#fff',
        },
      });
      return;
    }

    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };
  
 
return (
    <>
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label} htmlFor={nameId.current}>
        Name
        <input
          className={css.inputName}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder=" John Smith"
        />
      </label>
      <label className={css.label} htmlFor={numberId.current}>
        Number
        <input
          className={css.inputNumber}
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          placeholder=" 111-11-11"
        />
      </label>

      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
    </>
  );
}

