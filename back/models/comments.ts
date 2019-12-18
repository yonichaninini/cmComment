import mongoose from 'mongoose';

export interface CommentInterface extends mongoose.Document {
  comment_id: number;
  creation_time: string;
  post_id: number;
  parents_id: number; //이게 여기 있으면 안되는데...
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
      parents_id: number;
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
    },
  ],
});

export const commentModel = mongoose.model<CommentInterface>('Comment', conmmentSchema);
