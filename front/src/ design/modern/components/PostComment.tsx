import React from "react";
import "../styles/comment.scss";

import Comment from "./Comment";
import ProfileImg from "./ProfileImg";

import { CommentDataShape } from "../../../model/comentShape";

interface PostCommentProps {
  commentData: CommentDataShape[];
}
const PostComment = ({ commentData }: PostCommentProps) => {
  const comment = commentData.map(c => {
    return (
      <>
        <div className="comment">
          <div className="left">
            <ProfileImg />
          </div>
          <div className="right">
            <Comment
              key={c.comment_id}
              creation_time={c.creation_time}
              user_id={c.user_id}
              comment_id={c.comment_id}
              comment={c.comment}
              children={c.children}
            />
          </div>
        </div>
        {c.children.map(r => {
          return (
            <div className="reply">
              <div className="left">
                <ProfileImg />
              </div>
              <div className="right">
                <Comment
                  key={r.comment_id}
                  creation_time={c.creation_time}
                  user_id={c.user_id}
                  comment_id={c.comment_id}
                  comment={c.comment}
                />
              </div>
            </div>
          );
        })}
      </>
    );
  });

  return (
    <>
      <div className="PostComment">{comment}</div>
    </>
  );
};

export default PostComment;
