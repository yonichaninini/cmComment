import React, { useState } from "react";
import "../styles/ReplyBtn.scss";
import CommentInput from "./CommentInput";

const ReplyBtn = () => {
  const [isShowCommentInputBox, SetIsShowCommentInputBox] = useState(false);
  const onClickCommentBtn = (e: React.MouseEvent<HTMLElement>) => {
    SetIsShowCommentInputBox(!isShowCommentInputBox);
  };
  return (
    <>
      <button type="submit" onClick={onClickCommentBtn} className="addReplyBtn">
        {isShowCommentInputBox ? "X" : "REPLY"}
      </button>
      {isShowCommentInputBox ? <CommentInput /> : ""}
    </>
  );
};

export default ReplyBtn;
