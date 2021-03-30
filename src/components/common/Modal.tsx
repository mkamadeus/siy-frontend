import React from 'react';

interface Props {
  title: string;
  text: string;
}

const Modal = ({ title, text }: Props) => {
  return (
    <div className="flex rounded-lg p-6">
      <div>{title}</div>
      <div>{text}</div>
    </div>
  );
};

export default Modal;
