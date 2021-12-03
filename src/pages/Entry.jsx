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
    }
  );

  const onSubmit = (data) => {
    console.log('🚀 ~ file: Entry.js ~ line 21 ~ handleSubmit ~ data', data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>{entryTemplate.entryTitle}</div>
        <div>{entryTemplate.entryBlurb}</div>
        {fields.map((item, index) => (
          <li key={item.id}>
            <input {...register(`test.${index}.value`)} />
            <button type='button' onClick={() => remove(index)}>
              Delete
            </button>
          </li>
        ))}
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
};

export default Entry;

// return (
//   <EntrySection
//     key={key}
//     sectionTitle={section.sectionTitle}
//     sectionCount={section.sectionCount}
//     sectionValues={section.sectionValues}
//     values={values}></EntrySection>
// );
