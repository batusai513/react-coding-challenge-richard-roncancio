import React, { MouseEvent } from "react";
import { IComment } from "../../types/Comment";

interface Props {
  comment: IComment;
  handleReply: (commentId: string) => void;
}

const Comment = ({comment, handleReply}: Props) => {
  const handleCommentWrapper = (evt: MouseEvent) => {
    evt.preventDefault();
    handleReply(comment.id);
  }
  return <li>
    <strong>{comment.user}</strong><br />
    {comment.text}
    <button onClick={handleCommentWrapper}>reply</button>
  </li>
}

export {
  Comment
}
