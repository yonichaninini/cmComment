import React from 'react';
import { useState, useEffect } from 'react';
/*model*/
import { CommentManage } from '../models/CommentManage';
/*type*/
import { CommentDataShape } from '../typeShapes/comentShape';
import { UserDataShape } from '../typeShapes/userDataShape';
/*component*/
import CommentList from '../components/CommentList/CommentList';
import CommentInput from '../components/CommentInput/CommentInput';
import CommentSortBtn from '../components/CommentSortBtn/CommentSortBtn';

const Comment = () => {
  const user_mock: UserDataShape = {
    user_email: 'cksal5911@naver.com',
    user_password: '1234',
  };
  const commentManage = new CommentManage('1');
  const [commentList, setCommentList] = useState<CommentDataShape[]>();
  useEffect(() => {
    commentManage.getCommentData().then(setCommentList);
  });

  return (
    <div className="wrapper">
      <CommentInput />
      <div className="header-wrapper">
        <div className="comment-count">
          Total comments<span className="count-text"></span>
        </div>
        <CommentSortBtn />
      </div>
      {commentList ? <CommentList commentData={commentList} /> : ''}
    </div>
  );
};

export default Comment;
