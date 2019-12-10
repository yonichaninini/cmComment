import React, { useState } from "react";

interface Props {
  childrenLength: Number;
}

const ShowReplyBtn = ({ childrenLength }: Props) => {
  const [isShowReply, SetIsShowReply] = useState(false);

  const onClickShowReplyBtn = (e: React.MouseEvent<HTMLElement>) => {
    SetIsShowReply(!isShowReply);
  };
  return (
    <button className="show-reply-btn" onClick={onClickShowReplyBtn}>
      {"Reply : " + childrenLength}
    </button>
  );
};

export default ShowReplyBtn;
