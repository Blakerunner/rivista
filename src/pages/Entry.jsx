import { useState, useEffect } from 'react';
import EntrySection from '../components/EntrySection';
import { entryTemplates } from '../data/entryTemplates';
import { HiMinusSm, HiPlusSm } from 'react-icons/hi';

const Entry = ({ entryTemplate = entryTemplates[0] }) => {
  const [template, setTemplate] = useState(entryTemplate);
  const [formValues, setFormValues] = useState([{}]);

  useEffect(() => {
    setFormValues(templateBuild(entryTemplate));
  }, []);

  const templateBuild = (template) => {
    const fields = [];
    template.sections.forEach((section) => {
      const sectionTitle = section.sectionTitle;
      for (let i = 0; i < section.sectionCount; i++) {
        fields.push({ sectionTitle, value: '' });
      }
    });
    return fields;
  };

  console.log('formValues', formValues);

  const handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i].value = e.target.value;
    setFormValues(newFormValues);
  };

  const addFormFields = (sectionTitle, index) => {
    let newFormValues = [...formValues];
    newFormValues.splice(index + 1, 0, { sectionTitle, value: '' });
    setFormValues(newFormValues);
  };

  const removeFormFields = (index) => {
    let newFormValues = [...formValues];
    newFormValues.splice(index, 1);
    setFormValues(newFormValues);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let arr = formValues.filter((el) => {
      return el.value
    });
    // entry
    alert(JSON.stringify(arr));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <ul className=''>
          {formValues.map((field, index) => (
            <li key={index} className='my-4'>
              <label className='block text-md font-semibold text-gray-600'>
                {field.sectionTitle}
              </label>
              <input
                className='border w-4/6 h-12 align-middle border-gray-300 transition'
                type='textarea'
                name='field'
                value={field.value || ''}
                onChange={(e) => handleChange(index, e)}
              />
              <button
                className='button add ml-2 font-extralight text-sm border hover:border-gray-400 transition rounded-full h-12 w-12 items-center justify-center align-middle'
                type='button'
                onClick={() => addFormFields(field.sectionTitle, index)}>
                <HiPlusSm className="h-6 w-6 m-auto"/>
              </button>
              <button
                className='button add ml-2 border hover:border-gray-400 transition rounded-full h-12 w-12 items-center justify-center align-middle'
                type='button'
                onClick={() => removeFormFields(index)}>
                <HiMinusSm className="h-6 w-6 m-auto"/>
              </button>
            </li>
          ))}
        </ul>

        <input type='submit' className="hover:cursor-pointer font-semibold text-gray-800 bg-green-100 border border-green-500 rounded-lg px-4 py-2" />
      </form>
    </div>
  );
};

export default Entry;
