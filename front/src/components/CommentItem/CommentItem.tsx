import * as React from 'react';
import { useState } from 'react';

import './commentItem.scss';

import CommentInput from '../CommentInput/CommentInput';
import { dateFormat } from '../../utils/dateFormat';
import Modal from '../Modal/Modal';

interface ComentProps {
  _id: string;
  create_time: number;
  comment: string;
  isparents: boolean;
  page_url: string;
}

const Comment = ({ _id, comment, create_time, isparents, page_url }: ComentProps) => {
  const [isShowCommentInputBox, SetIsShowCommentInputBox] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onClickShowCommentInput = (e: React.MouseEvent<HTMLElement>) => {
    SetIsShowCommentInputBox(!isShowCommentInputBox);
    //TODO
  };
  const deleteBtnClick = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };

  const create_date = dateFormat(String(create_time));

  return (
    <>
      <div className="comment-head">
        <div className="information">
          <div className="profile-nickname">익명</div>
          <div className="create_time">작성일 : {create_date}</div>
        </div>
        <Modal page_url={page_url} _id={_id} isOpen={isOpenModal} close={closeModal} />
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
          답글
        </button>
      ) : (
        ''
      )}
      {isShowCommentInputBox ? <CommentInput page_url={page_url} _id={_id} isReply={isShowCommentInputBox} /> : ''}
    </>
  );
};

export default Comment;
