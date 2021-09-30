import { useState } from 'react';
import css from './ContactForm.module.css';
import uuid from '../../../node_modules/uuid/dist/v4';

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contactNameId = () => uuid();
  const contactNumberId = () => uuid();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(name, number);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label} htmlFor={contactNameId}>
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          id={contactNameId}
        />
      </label>
      <label className={css.label} htmlFor={contactNumberId}>
        Number
        <input
          className={css.input}
          type="text"
          name="number"
          value={number}
          onChange={handleChange}
          id={contactNumberId}
        />
      </label>

      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
}
