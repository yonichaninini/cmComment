import * as React from 'react';
import { useState } from 'react';

import './commentInput.scss';
import { createReply } from '../../utils/CommentManage';
import { createComment } from '../../utils/CommentManage';

interface props {
  isReply?: boolean;
  _id?: string;
  page_url: string;
}
const CommentInput = ({ isReply, _id, page_url }: props) => {
  const [comment, setComment] = useState<string | undefined>('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.currentTarget.value);
  };
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    if (comment === '' || undefined) {
      alert('댓글을 입력해주세요!');
    } else if (isReply) {
      createReply(page_url, comment, _id, email, password);
    } else {
      createComment(page_url, comment, email, password);
    }
    setComment('');
    setEmail('');
    setPassword('');
  };
  return (
    <>
      <div className="comment-input">
        <form onSubmit={onSubmit}>
          <div className="input-wrapper">
            <textarea placeholder="저작권 등 다른 사람의 권리를 침해하거나 명예를 훼손하는 게시물은 이용약관 및 관련 법률에 의해 제재를 받을 수 있습니다." value={comment} onChange={onChange} />
          </div>
          <div className="bottom-wrapper">
            <div className="login_form">
              <input type="email" placeholder="이메일" required onChange={onChangeEmail} value={email}></input>
              <input type="password" placeholder="패스워드를 입력하세요" required onChange={onChangePassword} value={password}></input>
            </div>
            <button type="submit">submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CommentInput;
