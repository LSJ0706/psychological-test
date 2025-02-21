import React from 'react';

const AuthForm = ({ title, inputs, buttonText, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {};
    inputs.forEach(({ name }) => {
      if (name !== 'confirmPassword') {
        data[name] = formData.get(name);
      }
    });
    onSubmit(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 border rounded-lg w-80">
        <h2>{title}</h2>
        {inputs.map(({ name, type, placeholder }) => (
          <input key={name} name={name} type={type} placeholder={placeholder} className="border" required />
        ))}
        <button type="submit" className="bg-purple-500 text-white p-2 rounded">
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
