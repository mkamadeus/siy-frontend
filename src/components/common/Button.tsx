import React from 'react';

interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  type?: 'button' | 'submit' | 'reset' | undefined;
  children?: React.ReactNode;
}

const Button: React.ForwardRefRenderFunction<HTMLButtonElement, Props> = (
  props,
  ref
) => {
  return (
    <button
      className="flex items-center justify-center rounded-md bg-blue-500 text-white py-2 px-4 transform shadow-none hover:shadow-lg focus:ring focus:outline-none focus:bg-blue-600 transition duration-300 hover:-translate-y-1"
      type={props.type}
      onClick={props.onClick}
      ref={ref}
    >
      {props.children}
    </button>
  );
};

export default React.forwardRef<HTMLButtonElement, Props>(Button);
