import * as React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import { CommentManage } from './models/CommentManage';
import CommentList from './components/CommentList';
import CommentInput from './components/CommentInput';

import { CommentDataShape } from './typeShapes/comentShape';
import { UserDataShape } from './typeShapes/userDataShape';

const App = () => {
  const user_mock: UserDataShape = {
    user_id: 'cksal5911',
    loginType: 'kakao',
    user_profile_img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBhaNckqtbF2gR0kMvWGhwe7ad4BvVAnAcHQqhgiIzp9mXSPXv4Q&s',
    nick_name: '윤이찬미',
  };
  const mock: CommentDataShape[] = [
    {
      comment_id: 1,
      creation_time: '2019-07-11 오전 11시 30분',
      post_id: 1,
      user: {
        user_id: 'cksal5911',
        loginType: 'kakao',
        user_profile_img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBhaNckqtbF2gR0kMvWGhwe7ad4BvVAnAcHQqhgiIzp9mXSPXv4Q&s',
        nick_name: '윤이찬미',
      },
      comment: '댓글테스트 기능',
      children: [
        {
          comment_id: 3,
          creation_time: '2019-10-11 오전 08시 30분',
          post_id: 1,
          user: {
            user_id: 'wldud5911',
            loginType: 'kakao',
            user_profile_img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBhaNckqtbF2gR0kMvWGhwe7ad4BvVAnAcHQqhgiIzp9mXSPXv4Q&s',
            nick_name: '민지',
          },
          comment: '찬미한테 대댓글테스트 기능',
          parents: 1,
        },
        {
          comment_id: 4,
          creation_time: '2019-10-11 오전 08시 30분',
          post_id: 1,
          user: {
            user_id: 'jojo5911',
            loginType: 'kakao',
            user_profile_img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBhaNckqtbF2gR0kMvWGhwe7ad4BvVAnAcHQqhgiIzp9mXSPXv4Q&s',
            nick_name: '주영',
          },
          comment: '찬미한테 대댓글테스트 기능',
          parents: 1,
        },
      ],
    },
    {
      comment_id: 2,
      creation_time: '2019-10-11 오전 03시 30분',
      post_id: 1,
      user: {
        user_id: 'jojo5911',
        loginType: 'kakao',
        user_profile_img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBhaNckqtbF2gR0kMvWGhwe7ad4BvVAnAcHQqhgiIzp9mXSPXv4Q&s',
        nick_name: '주영',
      },
      comment: '댓글테스트 기능',
      children: [
        {
          comment_id: 5,
          creation_time: '2019-10-11 오전 08시 30분',
          post_id: 1,
          user: {
            user_id: 'jiwoo5911',
            loginType: 'kakao',
            user_profile_img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBhaNckqtbF2gR0kMvWGhwe7ad4BvVAnAcHQqhgiIzp9mXSPXv4Q&s',
            nick_name: '지우',
          },
          comment: '희수한테 대댓글테스트 기능',
          parents: 1,
        },
      ],
    },
  ];
  const commentManage = new CommentManage('1');
  const [commentList, setCommentList] = useState<CommentDataShape[]>();
  useEffect(() => {
    commentManage.getCommentData().then(setCommentList);
  }, []);

  return (
    <div className="wrapper">
      <CommentInput />
      <div className="header-wrapper">
        <div className="comment-count">
          Total comments<span className="count-text"></span>
        </div>
        <div className="comment-sort">
          <span className="newest">Newest</span>
          <span className="past">past</span>
        </div>
      </div>
      {commentList ? <CommentList commentData={commentList} userData={user_mock} /> : ''}
    </div>
  );
};

export default App;
