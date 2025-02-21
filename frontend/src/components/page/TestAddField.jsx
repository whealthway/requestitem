import React, { useState } from 'react';
import Label from '../custom/Label';
import InputField from '../custom/InputField';

const TestAddField = () => {
  const [fields, setFields] = useState([]);

  const addFields = () => {
    setFields([...fields, { id: fields.length, value1: '', value2: '', value3: '' }]);
  };

  const handleChange = (index, event) => {
    const newFields = fields.map((field, i) => {
      if (i === index) {
        return { ...field, [event.target.name]: event.target.value };
      }
      return field;
    });
    setFields(newFields);
  };

  return (
    <div className='space-y-2 p-4 border border-gray-300 rounded-md'>
      <button onClick={addFields} disabled={fields.length + 1<=5?false:true}>Add Generic Name and UOM</button>
      {fields.map((field, index) => (
        <div key={field.id}>
          <Label label_name={`Generic Name ${index + 1}`} />
          <InputField
            type="text"
            name="value1"
            value={field.value1}
            onChange={(e) => handleChange(index, e)}
            placeholder={`Field ${index}`}
          />
          <Label label_name={`Measure ${index + 1}`} />
          <InputField
            type="text"
            name="value2"
            value={field.value2}
            onChange={(e) => handleChange(index, e)}
            placeholder={`Field ${index}`}
          />
          <Label label_name={`UOM ${index + 1}`} />
          <InputField
            type="text"
            name="value3"
            value={field.value3}
            onChange={(e) => handleChange(index, e)}
            placeholder={`Field ${index}`}
          />
        </div>
      ))}
    </div>
  );
};

export default TestAddField;
