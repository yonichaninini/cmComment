import * as React from "react";
import { useState } from "react";
import "../styles/ReplyBtn.scss";
import CommentInput from "./CommentInput";

const ShowCommentInputBtn = () => {
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

export default ShowCommentInputBtn;
