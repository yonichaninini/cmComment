import React, { useState } from "react";
import { ReplyDataShape } from "../../../model/comentShape";
import CommentView from "../view/CommentView";

const Reply = ({
  comment,
  user_id,
  creation_time,
  comment_id
}: ReplyDataShape) => {
  return (
    <div className="reply">
      <CommentView
        comment={comment}
        user_id={user_id}
        creation_time={creation_time}
        comment_id={comment_id}
      />
    </div>
  );
};

export default Reply;
