import * as React from 'react';
import '../styles/comment.scss';

import CommentItem from './CommentItem';
import ProfileImg from './ProfileImg';

import { CommentDataShape } from '../typeShapes/comentShape';
import { UserDataShape } from '../typeShapes/userDataShape';

interface CommentListProps {
  commentData: CommentDataShape[];
  userData: UserDataShape;
}
const CommentList = ({ commentData, userData }: CommentListProps) => {
  const comment = commentData.map(c => {
    return (
      <>
        <div className="comment" key={c.comment_id}>
          <div className="left">
            <ProfileImg profile_img={c.user.user_profile_img} />
          </div>
          <div className="right">
            <CommentItem creation_time={c.creation_time} user_id={c.user.user_id} nick_name={c.user.nick_name} comment_id={c.comment_id} comment={c.comment} children={c.children} />
          </div>
        </div>
        {c.children.map(r => {
          return (
            <div className="reply hidden" key={r.comment_id}>
              <div className="left">
                <ProfileImg profile_img={r.user.user_profile_img} />
              </div>
              <div className="right">
                <CommentItem creation_time={r.creation_time} user_id={r.user.user_id} nick_name={r.user.nick_name} comment_id={r.comment_id} comment={r.comment} />
              </div>
            </div>
          );
        })}
      </>
    );
  });

  return (
    <>
      <div className="comment-list">{comment}</div>
    </>
  );
};

export default CommentList;
