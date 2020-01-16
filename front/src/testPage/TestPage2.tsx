import React from 'react';
import Comment from '../container/Comment';
import './testPage.css';

const TestPage2 = () => {
  return (
    <div>
      <div className="main">자유롭게 댓글 작성하는 이곳은 페이지 2</div>
      <Comment page_url={'2'} />
    </div>
  );
};

export default TestPage2;
