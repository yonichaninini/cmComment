import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';

import { ReplyDataShape } from '../../typeShapes/comentShape';
import CommentInput from '../CommentInput/CommentInput';
import { dateFormat } from '../../utils/dateFormat';

interface ComentProps {
  _id: string;
  create_time: number;
  update_time: number;
  user_id: string;
  comment: string;
  nick_name?: string;
  children?: ReplyDataShape[];
}

const Comment = ({ _id, comment, user_id, create_time, nick_name, children, update_time }: ComentProps) => {
  const [isShowCommentInputBox, SetIsShowCommentInputBox] = useState(false);
  const onClickShowCommentInput = (e: React.MouseEvent<HTMLElement>) => {
    SetIsShowCommentInputBox(!isShowCommentInputBox);
    //TODO
  };
  const create_date = dateFormat(String(create_time));
  const deleteBtnClick = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    axios({
      method: 'delete',
      url: '/api/delete_comment/1/' + _id,
      data: {
        _id: _id,
      },
    })
      .then(res => {
        window.location.reload();
      })
      .catch(err => {
        alert('삭제에 실패하였습니다. 관리자에게 문의하시기 바랍니다.');
        console.log(err);
      });
  };
  return (
    <>
      <div className="comment-head">
        <div className="information">
          <div className="profile-nickname">{nick_name}</div>
          <div className="create_time">작성일 : {create_date}</div>
        </div>
        <button className="delete_icon" onClick={deleteBtnClick}>
          삭제
        </button>
      </div>
      <div className="comment-body">
        <div className="comment-text">
          <p>{comment}</p>
        </div>
      </div>
      <button type="submit" onClick={onClickShowCommentInput} className="add-reply-btn">
        {isShowCommentInputBox ? 'X' : 'REPLY'}
      </button>
      {isShowCommentInputBox ? <CommentInput _id={_id} isReply={isShowCommentInputBox} /> : ''}
    </>
  );
};

export default Comment;
