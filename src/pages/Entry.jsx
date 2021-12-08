import { useState, useEffect } from 'react';
import EntrySection from '../components/EntrySection';
import { entryTemplates } from '../data/entryTemplates';

const Entry = ({ entryTemplate = entryTemplates[0] }) => {
  const [formValues, setFormValues] = useState([{}]);

  useEffect(() => {
    setFormValues(templateBuild(entryTemplate));
  }, [])

  const templateBuild = (template) => {
    const fields = [];
    template.sections.forEach(section => {
      const sectionTitle = section.sectionTitle;
      for (let i = 0; i < section.sectionCount; i++) {
        fields.push({ sectionTitle, value: '' });
      }
    });
    return fields;
  };

  console.log("formValues", formValues)

  const handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  const addFormFields = (title) => {
    setFormValues([...formValues, { title, value: '' }]);
  };

  const removeFormFields = (index) => {
    let newFormValues = [...formValues];
    newFormValues.splice(index, 1);
    setFormValues(newFormValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formValues));
  };

  return (
    <div>
      <form Submit={handleSubmit}>
        <ul>
          {formValues.map((item, index) => (
            <li key={index}>
              <input
                type='textarea'
                name='field'
                value={item.name || ''}
                onChange={(e) => handleChange(index, e)}
              />
              <button type='button' onClick={() => removeFormFields(index)}>
                Delete
              </button>
            </li>
          ))}
          <button
            className='button add'
            type='button'
            onClick={() => addFormFields()}>
            Add
          </button>
        </ul>

        <input type='submit' />
      </form>
    </div>
  );
};

export default Entry;
