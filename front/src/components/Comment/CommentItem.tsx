import * as React from 'react';
import { useState } from 'react';
import moment from 'moment';

import { ReplyDataShape } from '../../typeShapes/comentShape';
import CommentInput from '../CommentInput/CommentInput';
import { dateFormat } from '../../utils/dateFormat';

interface ComentProps {
  creation_time: number;
  update_time: number;
  user_id: string;
  comment_id: number;
  comment: string;
  nick_name?: string;
  children?: ReplyDataShape[];
}

const Comment = ({ comment, user_id, creation_time, comment_id, nick_name, children, update_time }: ComentProps) => {
  const [isShowCommentInputBox, SetIsShowCommentInputBox] = useState(false);
  const onClickShowCommentInput = (e: React.MouseEvent<HTMLElement>) => {
    SetIsShowCommentInputBox(!isShowCommentInputBox);
  };
  const create_date = dateFormat(String(creation_time));
  const update_date = dateFormat(String(update_time));
  return (
    <>
      <div className="comment-head">
        <div className="profile-nickname">{nick_name}</div>
        <div className="creation-time">최초작성 : {create_date}</div>
        <div className="creation-time">마지막수정 : {update_date}</div>
      </div>
      <div className="comment-body">
        <div className="comment-text">
          <p>{comment}</p>
        </div>
      </div>
      <button type="submit" onClick={onClickShowCommentInput} className="add-reply-btn">
        {isShowCommentInputBox ? 'X' : 'REPLY'}
      </button>
      {isShowCommentInputBox ? <CommentInput /> : ''}
    </>
  );
};

export default Comment;
