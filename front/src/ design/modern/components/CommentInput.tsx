import React from "react";
import "../styles/commentInput.scss";
const CommentInput = () => {
  return (
    <div className="commentInput">
      <div className="input-wrapper">
        <textarea placeholder="댓글을 입력해 주세요.."></textarea>
      </div>
      <div className="submit-wrapper">
        <img src={require("../img/kakao.png")} />
        <button>등록</button>
      </div>
    </div>
  );
};

export default CommentInput;
