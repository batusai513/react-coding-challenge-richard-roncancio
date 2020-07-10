import * as React from 'react';
import { IComment } from '../types/Comment';
import Form from './Form';

interface Props {
  comments: IComment[];
  addReply: (id: string, reply: { user: string; text: string }) => void;
}

export default function ListComments({ comments, addReply }: Props) {
  if (comments.length === 0) {
    return <h1>Add a comment first</h1>;
  }

  return (
    <ul>
      {comments.map(({ id, user, text, replies }) => {
        return (
          <li key={id}>
            <p>{text}</p>
            <span>by: {user}</span>
            <CommentItem {...{ id, addReply }} />
            {replies!.length > 0 && (
              <ul>
                {replies!.map((reply) => {
                  return (
                    <li key={reply.id}>
                      <p>{reply.text}</p>
                      <span>by: {reply.user}</span>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
}

interface ItemProps {
  id: string;
  addReply: (id: string, reply: { user: string; text: string }) => void;
}

function CommentItem({ addReply, id }: ItemProps) {
  const [isReplying, setIsReplying] = React.useState(false);

  function onAddReply(text: string, user: string) {
    addReply(id, { user, text });
    setIsReplying(false);
  }

  return (
    <>
      {isReplying ? (
        <Form onCreateComment={onAddReply} />
      ) : (
        <button type="button" onClick={() => setIsReplying(true)}>
          Reply
        </button>
      )}
    </>
  );
}
