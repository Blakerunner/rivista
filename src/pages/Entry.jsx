import { useState, useEffect } from 'react';
import EntrySection from '../components/EntrySection';
import { entryTemplates } from '../data/entryTemplates';
import { useForm, useFieldArray } from 'react-hook-form';

const Entry = ({ entryTemplate = entryTemplates[0] }) => {
  const { register, control, handleSubmit } = useForm();
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: 'entry',
      defaultValue: entryTemplate,
    }
  );

  const onSubmit = (data) => {
    console.log('🚀 ~ file: Entry.js ~ line 21 ~ handleSubmit ~ data', data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <ul>
          {fields.map((item, index) => (
            <li key={item.id}>
              <input type='textarea' {...register(`test.${index}.firstName`)} />
              <button type='button' onClick={() => remove(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
        <input type='submit' />
      </form>
    </div>
  );
};

export default Entry;
