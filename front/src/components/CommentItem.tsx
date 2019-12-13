import * as React from "react";
import { useState } from "react";
import { ReplyDataShape } from "../typeShapes/comentShape";
import CommentInput from "./CommentInput";

interface ComentProps {
  creation_time: string;
  user_id: string;
  comment_id: number;
  comment: string;
  nick_name?: string;
  children?: ReplyDataShape[];
}

const Comment = ({
  comment,
  user_id,
  creation_time,
  comment_id,
  nick_name,
  children
}: ComentProps) => {
  const [isShowCommentInputBox, SetIsShowCommentInputBox] = useState(false);
  const onClickShowCommentInput = (e: React.MouseEvent<HTMLElement>) => {
    SetIsShowCommentInputBox(!isShowCommentInputBox);
  };
  return (
    <>
      <div className="comment-head">
        <div className="profile-nickname">{nick_name}</div>
        <div className="creation-time">{creation_time}</div>
      </div>
      <div className="comment-body">
        <div className="comment-text">
          <p>{comment}</p>
        </div>
      </div>
      <button
        type="submit"
        onClick={onClickShowCommentInput}
        className="add-reply-btn"
      >
        {isShowCommentInputBox ? "X" : "REPLY"}
      </button>
      {isShowCommentInputBox ? <CommentInput /> : ""}
    </>
  );
};

export default Comment;
