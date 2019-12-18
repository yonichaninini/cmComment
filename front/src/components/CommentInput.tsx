import * as React from "react";
import { useState } from "react";
import "../styles/commentInput.scss";

const CommentInput = () => {
  const onsubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
  };
  const [comment, setComment] = useState("");
  return (
    <div className="comment-input">
      <form onSubmit={onsubmit}>
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
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
};

export default CommentInput;
