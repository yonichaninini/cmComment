import React from "react";
import "../styles/commentInput.scss";
const CommentInput = () => {
  return (
    <div className="commentInput">
      <div className="input-wrapper">
        <textarea placeholder="Please write a comment.."></textarea>
      </div>
      <div className="bottom-wrapper">
        <div className="img-wrapper">
          <img src={require("../img/kakao.png")} />
          <img src={require("../img/google.png")} />
          <img src={require("../img/facebook.png")} />
          <img src={require("../img/naver.png")} />
        </div>
        <button>submit</button>
      </div>
    </div>
  );
};

export default CommentInput;
