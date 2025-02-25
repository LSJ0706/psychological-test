import React from 'react';
import { useState } from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

const Form = ({ title, inputs, buttonText, onSubmit, linkText, linkHref }) => {
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6 bg-white rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center">{title}</h2>
        {inputs.map(({ name, type, placeholder }) => (
          <input
            key={name}
            name={name}
            type={type}
            value={formData[name]}
            placeholder={placeholder}
            onChange={handleChange}
            className="w-full h-12 p-3 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        ))}
        <Button
          name={buttonText}
          type="submit"
          className="w-full p-3 bg-purple-500 rounded-lg text-white rounded0lg hover:bg-purple-600 transition"
        />
        {linkText && linkHref && (
          <Link to={linkHref} className="text-purple-500 text-center">
            {linkText}
          </Link>
        )}
      </form>
    </div>
  );
};

export default Form;
