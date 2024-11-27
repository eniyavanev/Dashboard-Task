import React from 'react';

const Button = ({children,disabled ,className,onClick}) => {
  return (
    <button onClick={onClick} disabled={disabled} className={className}>
     {children}
    </button>
  );
}

export default Button;
