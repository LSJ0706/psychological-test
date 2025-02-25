const Button = ({ name, ...props }) => {
  return (
    <button
      className="px-4 py-2 bg-purple-500 rounded-lg text-white hover:bg-purple-600 transition duration-300 md:w-auto md:px-6"
      {...props}
    >
      {name}
    </button>
  );
};

export default Button;
