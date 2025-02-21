import React from 'react';
import { useState } from 'react';

const AuthForm = ({ title, inputs, buttonText, onSubmit }) => {
  const [formData, setFormData] = useState(
    inputs.reduce(
      (acc, input) => ({
        ...acc,
        [input.name]: input.value || ''
      }),
      {}
    )
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {};
    Object.keys(formData).forEach((name) => {
      if (name !== 'confirmPassword') {
        data[name] = formData[name];
      }
    });
    onSubmit(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 border rounded-lg w-80">
        <h2>{title}</h2>
        {inputs.map(({ name, type, placeholder }) => (
          <input
            key={name}
            name={name}
            type={type}
            value={formData[name]}
            placeholder={placeholder}
            onChange={handleChange}
            className="border"
            required
          />
        ))}
        <button type="submit" className="bg-purple-500 text-white p-2 rounded">
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
