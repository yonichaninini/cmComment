import React, { useState } from 'react';
import { deleateComment } from '../../utils/CommentManage';

import './modal.scss';

interface props {
  _id: string;
  isOpen: boolean;
  close: () => void;
  page_url: string;
}

const Modal = ({ page_url, _id, isOpen, close }: props) => {
  const [password, setPassword] = useState('');

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };
  const onSubmitPasswordCheck = (e: React.FormEvent<HTMLElement>) => {
    deleateComment(page_url, _id, password);
    close();
  };
  const CancelBtnClick = (e: React.FormEvent<HTMLElement>) => {
    close();
  };

  return (
    <>
      {isOpen ? (
        <div>
          <div className="overlay" />
          <div className="modal">
            <form onSubmit={onSubmitPasswordCheck}>
              <input type="password" placeholder="댓글 작성시 입력한 비밀번호를 적어주세요" onChange={onChangePassword}></input>
              <div className="button-wrapper">
                <button type="submit">확인</button>
                <button type="button" onClick={CancelBtnClick}>
                  취소
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default Modal;
