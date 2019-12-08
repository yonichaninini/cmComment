import React, { useState, useEffect } from "react";
import { ReplyDataShape } from "../../../model/comentShape";
import CommentView from "../view/CommentView";
import Reply from "./Reply";

interface ComentProps {
  comment: string;
  creation_time: string;
  user_id: string;
  comment_id: number;
  children: ReplyDataShape[];
}

const Comment = ({
  comment,
  user_id,
  creation_time,
  comment_id,
  children
}: ComentProps) => {
  return (
    <>
      <div className="comment">
        <CommentView
          comment={comment}
          user_id={user_id}
          creation_time={creation_time}
          comment_id={comment_id}
          children={children}
        />
      </div>
      {children.map(c => {
        return (
          <Reply
            key={c.comment_id}
            id={c.id}
            post_id={c.post_id}
            user_id={c.user_id}
            creation_time={c.creation_time}
            comment_id={c.comment_id}
            comment={c.comment}
            parents={c.parents}
          />
        );
      })}
    </>
  );
};

export default Comment;
