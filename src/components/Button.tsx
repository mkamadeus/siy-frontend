import React from 'react';

const Button: React.FC = () => {
  return (
    <button
      type="submit"
      className="w-1/2 flex items-center justify-center rounded-md bg-blue-500 text-white hover:shadow-lg border-gray-200 focus:bg-blue-600 m-3"
    >
      Upload
    </button>
  );
};

export default Button;
