import React, { useState, useEffect } from "react";
import { ReplyDataShape } from "../../../model/comentShape";
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
  const [isShowReply, SetIsShowReply] = useState(false);

  const onClickShowReplyBtn = (e: React.MouseEvent<HTMLElement>) => {
    SetIsShowReply(!isShowReply);
    /*
    if (isShowReply) {
      document.getElementsByClassName("reply").classList.remove("hidden");
    } else {
      document.getElementsByClassName("reply").classList.add("hidden");
    }*/
  };
  if (isShowReply) {
  }
  return (
    <>
      <div className="comment-head">
        <div className="profile-nickname">{user_id}</div>
        <div className="creation-time">{creation_time}</div>
        {children ? (
          <button className="show-reply-btn" onClick={onClickShowReplyBtn}>
            {"Reply : " + children.length}
          </button>
        ) : (
          ""
        )}
      </div>
      <div className="comment-body">
        <div className="comment-text">
          <p>{comment}</p>
        </div>
      </div>
      <ReplyBtn />
    </>
  );
};

export default Comment;
