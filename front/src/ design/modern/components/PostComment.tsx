import React from "react";
import "../styles/comment.scss";

import Comment from "./Comment";
import { CommentDataShape } from "../../../model/comentShape";

interface PostCommentProps {
  commentData: CommentDataShape[];
}
const PostComment = ({ commentData }: PostCommentProps) => {
  const comment = commentData.map(c => {
    return (
      <>
        <Comment
          key={c.comment_id}
          creation_time={c.creation_time}
          user_id={c.user_id}
          comment_id={c.comment_id}
          comment={c.comment}
          children={c.children}
        />
      </>
    );
  });

  return (
    <>
      <div className="PostComment">{comment}</div>
    </>
  );
};

export default PostComment;
