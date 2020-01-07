import * as React from 'react';
import { useState } from 'react';

import { ReplyDataShape } from '../../typeShapes/comentShape';
import CommentInput from '../CommentInput/CommentInput';
import { dateFormat } from '../../utils/dateFormat';
import { CommentManage } from '../../models/CommentManage';

interface ComentProps {
  _id: string;
  create_time: number;
  comment: string;
  isparents: boolean;
}

const Comment = ({ _id, comment, create_time, isparents }: ComentProps) => {
  const [isShowCommentInputBox, SetIsShowCommentInputBox] = useState(false);
  const [password, setPassword] = useState('');
  const [isOpenModal, setIsOpenModal] = useState(false);
  const onClickShowCommentInput = (e: React.MouseEvent<HTMLElement>) => {
    SetIsShowCommentInputBox(!isShowCommentInputBox);
    //TODO
  };
  const commentManage = new CommentManage('1');
  const create_date = dateFormat(String(create_time));

  const deleteBtnClick = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    setIsOpenModal(true);
  };
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };
  const onSubmitPasswordCheck = (e: React.FormEvent<HTMLElement>) => {
    commentManage.deleateComment(_id, password);
    setIsOpenModal(false);
  };
  const CancelBtnClick = (e: React.FormEvent<HTMLElement>) => {
    setIsOpenModal(false);
  };
  return (
    <>
      <div className="comment-head">
        <div className="information">
          <div className="profile-nickname">익명</div>
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
      {isparents ? (
        <button type="submit" onClick={onClickShowCommentInput} className="add-reply-btn">
          {isShowCommentInputBox ? 'X' : 'REPLY'}
        </button>
      ) : (
        ''
      )}
      {isShowCommentInputBox ? <CommentInput _id={_id} isReply={isShowCommentInputBox} /> : ''}
      {isOpenModal ? (
        <form onSubmit={onSubmitPasswordCheck}>
          <input type="password" placeholder="댓글 작성시 입력한 비밀번호를 적어주세요" onChange={onChangePassword}></input>
          <button type="submit">확인</button>
          <button type="button" onClick={CancelBtnClick}>
            취소
          </button>
        </form>
      ) : (
        ''
      )}
    </>
  );
};

export default Comment;
