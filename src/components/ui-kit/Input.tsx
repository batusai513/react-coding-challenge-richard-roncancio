import React, {ChangeEvent} from "react";

interface Props {
  onChange: (value: string) => void
  value: string;
  label: string;
  placeholder: string;
}


const Input = ({onChange, value, label, placeholder}: Props) => {
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }
  return <div>
    <label>{label}</label><input onChange={onChangeHandler} placeholder={placeholder} value={value}  />
  </div>
}

export {
  Input
}