import React from "react";
import "../styles/ReplyBtn.scss";

interface Props {
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  text: string;
}

const ReplyBtn = ({ onClick, text }: Props) => {
  return (
    <button type="submit" onClick={onClick} className="addReplyBtn">
      {text}
    </button>
  );
};

export default ReplyBtn;
