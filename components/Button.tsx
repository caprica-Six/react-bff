import React, {MouseEventHandler} from 'react';

interface ButtonProps {
  children?: string;
  onClick?: MouseEventHandler;
}

export default function Button({children, onClick}: ButtonProps) {
  return (
    <button
      className="outline outline-2 outline-offset-2 p-1 rounded-sm bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white  border border-blue-500 hover:border-transparent"
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}
