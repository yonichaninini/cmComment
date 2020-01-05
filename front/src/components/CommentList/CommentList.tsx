import * as React from 'react';
import './comment.scss';

import CommentItem from '../CommentItem/CommentItem';
import ProfileImg from '../ProfileImg/ProfileImg';

import { CommentDataShape } from '../../typeShapes/comentShape';
import { UserDataShape } from '../../typeShapes/userDataShape';

interface CommentListProps {
  commentData: CommentDataShape[];
  userData: UserDataShape;
}
const CommentList = ({ commentData, userData }: CommentListProps) => {
  const comment = commentData.map(c => {
    return (
      <>
        <div className="comment" key={c._id}>
          <div className="left">
            <ProfileImg profile_img={c.user.user_profile_img} />
          </div>
          <div className="right">
            <CommentItem create_time={c.create_time} update_time={c.update_time} user_id={c.user.user_id} nick_name={c.user.nick_name} _id={c._id} comment={c.comment} children={c.children} />
          </div>
        </div>
        {c.children.map(r => {
          return (
            <div className="reply hidden" key={r._id}>
              <div className="left">
                <ProfileImg profile_img={r.user.user_profile_img} />
              </div>
              <div className="right">
                <CommentItem create_time={r.create_time} update_time={r.update_time} user_id={r.user.user_id} nick_name={r.user.nick_name} _id={r._id} comment={r.comment} />
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
