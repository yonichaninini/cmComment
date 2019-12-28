import * as React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import { CommentManage } from './models/CommentManage';
import CommentList from './components/CommentList/CommentList';
import CommentInput from './components/CommentInput/CommentInput';

import { CommentDataShape } from './typeShapes/comentShape';
import { UserDataShape } from './typeShapes/userDataShape';
import CommentSortBtn from './components/CommentSortBtn/CommentSortBtn';

const App = () => {
  const user_mock: UserDataShape = {
    user_id: 'cksal5911',
    loginType: 'kakao',
    user_profile_img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBhaNckqtbF2gR0kMvWGhwe7ad4BvVAnAcHQqhgiIzp9mXSPXv4Q&s',
    nick_name: '윤이찬미',
  };
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
        <CommentSortBtn />
      </div>
      {commentList ? <CommentList commentData={commentList} userData={user_mock} /> : ''}
    </div>
  );
};

export default App;
