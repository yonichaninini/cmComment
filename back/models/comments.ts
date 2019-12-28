import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export interface CommentInterface extends mongoose.Document {
  comment_id: number;
  creation_time: number;
  post_id: number;
  user: {
    user_id: string;
    loginType: string;
    user_profile_img: string;
    nick_name: string;
  };
  comment: string;
  children: [
    {
      comment_id: number;
      creation_time: number;
      post_id: number;
      user: {
        user_id: string;
        loginType: string;
        user_profile_img: string;
        nick_name: string;
      };
      comment: string;
      parents: number;
    },
  ];
}

const commentSchema = new Schema({
  creation_time: Number,
  post_id: Number,
  user: {
    user_id: String,
    loginType: String,
    user_profile_img: String,
    nick_name: String,
  },
  comment: String,
  children: [
    {
      comment_id: Number,
      creation_time: Number,
      post_id: Number,
      user: {
        user_id: String,
        loginType: String,
        user_profile_img: String,
        nick_name: String,
      },
      comment: String,
      parents: Number,
    },
  ],
});
export default commentSchema;
export const commentModel = mongoose.model<CommentInterface>('Comment', commentSchema);
