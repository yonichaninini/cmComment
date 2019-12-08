import React, { useState, useEffect } from "react";
import { ReplyDataShape } from "../../../model/comentShape";
import CommentInput from "../components/CommentInput";
import ReplyBtn from "../components/ReplyBtn";

interface ComentProps {
  comment: string;
  creation_time: string;
  user_id: string;
  comment_id: number;
  children?: ReplyDataShape[];
}

const Comment = ({
  comment,
  user_id,
  creation_time,
  comment_id,
  children
}: ComentProps) => {
  const [isShowCommentInputBox, SetisShowCommentInputBox] = useState(false);
  const onClickCommentBtn = (e: React.MouseEvent<HTMLElement>) => {
    SetisShowCommentInputBox(!isShowCommentInputBox);
  };
  console.log(children);
  return (
    <>
      <div className="comment-head">
        <div className="profile-nickname">{user_id}</div>
        <div className="creation-time">{creation_time}</div>
      </div>
      <div className="comment-body">
        <div className="comment-text">
          <p>{comment}</p>
        </div>
      </div>
      {isShowCommentInputBox ? (
        <>
          <ReplyBtn onClick={onClickCommentBtn} text="닫기" />
          <CommentInput />
        </>
      ) : (
        <ReplyBtn onClick={onClickCommentBtn} text="댓글작성하기" />
      )}
    </>
  );
};

export default Comment;
