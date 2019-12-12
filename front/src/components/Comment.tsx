import * as React from "react";
import { useState } from "react";
import { ReplyDataShape } from "../model/comentShape";
import ShowReplyBtn from "./ShowReplyBtn";
import ShowCommentInputBtn from "./ShowCommentInputBtn";

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
  return (
    <>
      <div className="comment-head">
        <div className="profile-nickname">{nick_name}</div>
        <div className="creation-time">{creation_time}</div>
        {children ? <ShowReplyBtn childrenLength={children.length} /> : ""}
      </div>
      <div className="comment-body">
        <div className="comment-text">
          <p>{comment}</p>
        </div>
      </div>
      <ShowCommentInputBtn />
    </>
  );
};

export default Comment;
