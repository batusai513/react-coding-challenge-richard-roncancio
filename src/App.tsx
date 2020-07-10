import React from 'react';
import { nanoid } from 'nanoid';
import Form from './components/Form';
import ListComments from './components/ListComments';
import './App.css';
import { IComment } from './types/Comment';

function App() {
  const [comments, setComments] = React.useState<IComment[]>([]);

  function createComment(text: string, user: string): void {
    const newComment = {
      id: nanoid(),
      text,
      user,
      replies: [],
    };

    setComments((initial) => [...initial, newComment]);
  }

  function addReply(id: string, reply: { user: string; text: string }) {
    setComments((comments) => {
      return comments.map((comment) => {
        if (comment.id === id) {
          return {
            ...comment,
            replies: comment.replies!.concat([{ ...reply, id: nanoid() }]),
          };
        }

        return comment;
      });
    });
  }

  return (
    <>
      <ListComments comments={comments} addReply={addReply} />
      <Form onCreateComment={createComment} />
    </>
  );
}

export default App;
