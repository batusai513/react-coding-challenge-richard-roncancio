import React, { ChangeEvent } from 'react';

interface Props {
  onChange: (value: string, name: string) => void;
  value: string;
  label: string;
  placeholder: string;
  id: string;
}

const Input = ({ onChange, value, label, placeholder, id }: Props) => {
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    onChange(value, name);
  };
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        onChange={onChangeHandler}
        placeholder={placeholder}
        value={value}
        id={id}
        name={id}
      />
    </div>
  );
};

export { Input };
