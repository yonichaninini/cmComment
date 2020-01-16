import React from 'react';
import { useState, useEffect } from 'react';
/*model*/
import { getCommentData } from '../utils/CommentManage';
/*type*/
import { CommentDataShape } from '../typeShapes/comentShape';
/*component*/
import CommentList from '../components/CommentList/CommentList';
import CommentInput from '../components/CommentInput/CommentInput';
import CommentSortBtn from '../components/CommentSortBtn/CommentSortBtn';
import Pagenation from '../components/Pagenation/Pagenation';

interface props {
  page_url: string;
}
const Comment = ({ page_url }: props) => {
  const [commentList, setCommentList] = useState<CommentDataShape[]>();
  useEffect(() => {
    getCommentData(page_url).then(setCommentList);
  });

  return (
    <div className="wrapper">
      <CommentInput page_url={page_url} />
      <div className="header-wrapper">
        <div className="comment-count">
          Total comments<span className="count-text"></span>
        </div>
        <CommentSortBtn />
      </div>
      {commentList ? <CommentList page_url={page_url} commentData={commentList} /> : ''}
      <Pagenation start={1} end={10} current={1} total={7} />
    </div>
  );
};

export default Comment;
