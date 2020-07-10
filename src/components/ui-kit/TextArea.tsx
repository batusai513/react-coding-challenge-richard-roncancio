import React, { ChangeEvent } from 'react';

interface Props {
  onChange: (value: string, name: string) => void;
  value: string;
  label: string;
  placeholder: string;
  id: string;
}

const TextArea = ({ onChange, value, label, placeholder, id }: Props) => {
  const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    onChange(value, name);
  };
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <textarea
        onChange={onChangeHandler}
        placeholder={placeholder}
        value={value}
        id={id}
        name={id}>
        {value}
      </textarea>
    </div>
  );
};

export { TextArea };
