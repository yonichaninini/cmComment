import * as React from 'react';
import { useState, useRef } from 'react';
import axios from 'axios';

import './commentInput.scss';

interface props {
  isReply?: boolean;
  _id?: string;
}
const CommentInput = ({ isReply, _id }: props) => {
  const [comment, setComment] = useState<string | undefined>('');
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.currentTarget.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    if (comment === '' || undefined) {
      alert('댓글을 입력해주세요!');
    } else if (isReply) {
      axios({
        method: 'post',
        url: '/api/add_reply/1',
        data: {
          comment: comment,
          post_id: 1,
          user: {
            user_id: 'test',
            loginType: 'kakao',
            user_profile_img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBhaNckqtbF2gR0kMvWGhwe7ad4BvVAnAcHQqhgiIzp9mXSPXv4Q&s',
            nick_name: 'test',
          },
          parents: _id,
        },
      })
        .then(res => {
          window.location.reload();
        })
        .catch(res => {
          alert('오류가 발생했습니다. 관리자에게 문의하시길 바랍니다.');
        });
    } else {
      axios({
        method: 'post',
        url: '/api/add_comment/1',
        data: {
          comment: comment,
          post_id: 1,
          user: {
            user_id: 'test',
            loginType: 'kakao',
            user_profile_img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBhaNckqtbF2gR0kMvWGhwe7ad4BvVAnAcHQqhgiIzp9mXSPXv4Q&s',
            nick_name: '땡땡',
          },
        },
      })
        .then(res => {
          window.location.reload();
        })
        .catch(res => {
          alert('오류가 발생했습니다. 관리자에게 문의하시길 바랍니다.');
        });
    }
  };
  return (
    <div className="comment-input">
      <form onSubmit={onSubmit}>
        <div className="input-wrapper">
          <textarea placeholder="저작권 등 다른 사람의 권리를 침해하거나 명예를 훼손하는 게시물은 이용약관 및 관련 법률에 의해 제재를 받을 수 있습니다." value={comment} onChange={onChange} />
        </div>
        <div className="bottom-wrapper">
          <div className="img-wrapper">
            <img src={require('../../img/kakao.png')} />
            <img src={require('../../img/google.png')} />
            <img src={require('../../img/facebook.png')} />
            <img src={require('../../img/naver.png')} />
          </div>
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
};

export default CommentInput;
