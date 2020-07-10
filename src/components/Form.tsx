import * as React from 'react';
import { Input } from './ui-kit/Input';
import { TextArea } from './ui-kit/TextArea';

type Props = {
  onCreateComment: (text: string, name: string) => void;
};

type FormState = {
  text: string;
  user: string;
};

const initialValue: FormState = {
  user: '',
  text: '',
};

export default function Form({ onCreateComment }: Props) {
  const [formState, setFormState] = React.useState<FormState>(initialValue);

  function onInputChangeHandler(value: string, name: string): void {
    setFormState((prev) => ({ ...prev, [name]: value }));
  }

  function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { user, text } = formState;
    onCreateComment(text, user);
    setFormState(initialValue);
  }
  return (
    <form action="#" method="POST" onSubmit={onSubmitHandler}>
      <Input
        label="Your name"
        id="user"
        placeholder="Your name"
        onChange={onInputChangeHandler}
        value={formState.user}
      />

      <TextArea
        id="text"
        label="You comment"
        placeholder="Write your comment here"
        onChange={onInputChangeHandler}
        value={formState.text}
      />

      <button type="submit">Send</button>
    </form>
  );
}
