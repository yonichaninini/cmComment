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
        <div className="comment" key={c.comment_id}>
          <div className="left">
            <ProfileImg />
          </div>
          <div className="right">
            <Comment
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
            <div className="reply hidden" key={r.comment_id}>
              <div className="left">
                <ProfileImg />
              </div>
              <div className="right">
                <Comment
                  creation_time={r.creation_time}
                  user_id={r.user_id}
                  comment_id={r.comment_id}
                  comment={r.comment}
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
