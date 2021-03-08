import React from 'react';

const Button: React.FC = () => {
  return (
    <button
      type="submit"
      className="w-full flex items-center justify-center rounded-md bg-blue-500 text-white py-2 px-4 hover:shadow-lg border-gray-200 focus:bg-blue-600"
    >
      Upload
    </button>
  );
};

export default Button;
