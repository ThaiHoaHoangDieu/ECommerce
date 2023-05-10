import React from 'react';

const Custominput = (props) => {
  const { type, name, className, placeholder } = props;
  return (
    <div>
      <input
        type={type}
        name={name}
        className={` form-control  ${className}`}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Custominput;
