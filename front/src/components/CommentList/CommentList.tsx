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
            <ProfileImg />
          </div>
          <div className="right">
            <CommentItem create_time={c.create_time} _id={c._id} comment={c.comment} isparents={true} />
          </div>
        </div>
        {c.children.map(r => {
          return (
            <div className="reply hidden" key={r._id}>
              <div className="left">
                <ProfileImg />
              </div>
              <div className="right">
                <CommentItem create_time={r.create_time} _id={r._id} comment={r.comment} isparents={false} />
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
