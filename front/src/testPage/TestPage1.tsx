import React from 'react';
import Comment from '../container/Comment';
import './testPage.css';

const TestPage1 = () => {
  return (
    <div>
      <div className="main">자유롭게 댓글 작성하는 이곳은 페이지 1</div>
      <Comment page_url={'1'} />
    </div>
  );
};

export default TestPage1;
