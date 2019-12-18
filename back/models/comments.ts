import mongoose from 'mongoose';

export interface CommentInterface extends mongoose.Document {
  comment_id: number;
  creation_time: string;
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
      creation_time: string;
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

const Schema = mongoose.Schema;

const conmmentSchema = new Schema({
  comment_id: Number,
  creation_time: String,
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
      creation_time: String,
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

export const commentModel = mongoose.model<CommentInterface>('Comment', conmmentSchema);
