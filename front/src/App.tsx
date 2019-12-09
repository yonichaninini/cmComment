import React from "react";
import "./App.css";

import PostComment from "./ design/modern/components/PostComment";
import CommentInput from "./ design/modern/components/CommentInput";
import { CommentDataShape } from "./model/comentShape";

const App = () => {
  const mock: CommentDataShape[] = [
    {
      id: "www.test.com",
      creation_time: "2019-07-11 오전 11시 30분",
      post_id: 1,
      user_id: "찬미",
      comment_id: 1,
      comment: "댓글테스트 기능",
      children: [
        {
          id: "www.test.com",
          creation_time: "2019-10-11 오전 08시 30분",
          post_id: 1,
          user_id: "민지",
          comment_id: 3,
          comment: "찬미한테 대댓글테스트 기능",
          parents: 1
        },
        {
          id: "www.test.com",
          creation_time: "2019-10-11 오전 08시 30분",
          post_id: 1,
          user_id: "주영",
          comment_id: 4,
          comment: "찬미한테 대댓글테스트 기능",
          parents: 1
        }
      ]
    },
    {
      id: "www.test.com",
      creation_time: "2019-10-11 오전 03시 30분",
      post_id: 1,
      user_id: "희수",
      comment_id: 2,
      comment: "댓글테스트 기능",
      children: [
        {
          id: "www.test.com",
          creation_time: "2019-10-11 오전 08시 30분",
          post_id: 1,
          user_id: "주영",
          comment_id: 8,
          comment: "희수한테 대댓글테스트 기능",
          parents: 1
        }
      ]
    },
    {
      id: "www.test.com",
      creation_time: "2019-10-11 오전 03시 30분",
      post_id: 1,
      user_id: "지우",
      comment_id: 5,
      comment: "오!멋져요!",
      children: [
        {
          id: "www.test.com",
          creation_time: "2019-10-11 오전 08시 30분",
          post_id: 1,
          user_id: "주영",
          comment_id: 6,
          comment: "뭐가멋져?",
          parents: 1
        },
        {
          id: "www.test.com",
          creation_time: "2019-10-11 오전 08시 30분",
          post_id: 1,
          user_id: "찬미",
          comment_id: 7,
          comment: "모두멋져요!",
          parents: 1
        }
      ]
    }
  ];
  return (
    <div className="wrapper">
      <CommentInput />
      <div className="header-wrapper">
        <div className="comment-count">
          Total comments<span className="count-text">{mock.length}</span>
        </div>
        <div className="comment-sort">
          <span className="newest">Newest</span>
          <span className="past">past</span>
        </div>
      </div>
      <PostComment commentData={mock} />
    </div>
  );
};

export default App;
