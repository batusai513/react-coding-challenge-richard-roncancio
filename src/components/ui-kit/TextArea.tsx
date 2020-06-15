import React, { ChangeEvent } from "react";

interface Props {
  onChange: (value: string) => void
  value: string;
  label: string;
  placeholder: string;
}

const TextArea = ({onChange, value, label, placeholder}: Props) => {
  const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value)
  }
  return (
    <div>
      <label>{label}</label>
      <textarea  onChange={onChangeHandler} placeholder={placeholder} value={value}>{value}</textarea>
    </div>
  );
}

export {
  TextArea
}