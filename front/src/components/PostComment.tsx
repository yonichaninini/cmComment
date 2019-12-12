import * as React from "react";
import "../styles/comment.scss";

import Comment from "./Comment";
import ProfileImg from "./ProfileImg";

import { CommentDataShape } from "../model/comentShape";
import { UserDataShape } from "../model/userDataShape";

interface PostCommentProps {
  commentData: CommentDataShape[];
  userData: UserDataShape;
}
const PostComment = ({ commentData, userData }: PostCommentProps) => {
  const comment = commentData.map(c => {
    console.log(c.user.user_profile_img);
    return (
      <>
        <div className="comment" key={c.comment_id}>
          <div className="left">
            <ProfileImg profile_img={c.user.user_profile_img} />
          </div>
          <div className="right">
            <Comment
              creation_time={c.creation_time}
              user_id={c.user.user_id}
              nick_name={c.user.nick_name}
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
                <ProfileImg profile_img={r.user.user_profile_img} />
              </div>
              <div className="right">
                <Comment
                  creation_time={r.creation_time}
                  user_id={r.user.user_id}
                  nick_name={r.user.nick_name}
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
