import React from 'react';

const Button = ({children,disabled ,className}) => {
  return (
    <button disabled={disabled} className={className}>
     {children}
    </button>
  );
}

export default Button;