import React from 'react';

const Button = ({ name, ...props }) => {
  return <button {...props}>{name}</button>;
};

export default Button;
