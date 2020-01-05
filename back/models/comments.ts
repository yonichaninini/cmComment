import mongoose from 'mongoose';

export interface CommentInterface extends mongoose.Document {
  create_time: string;
  update_time: string;
  post_id: number;
  user: {
    user_id: string;
    loginType: string;
    user_profile_img: string;
    nick_name: string;
  };
  comment: string;
  children: [];
}

const Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;
const conmmentSchema = new Schema({
  create_time: Date,
  update_time: Date,
  post_id: Number,
  user: {
    user_id: String,
    loginType: String,
    user_profile_img: String,
    nick_name: String,
  },
  comment: String,
  children: [{ type: ObjectId, ref: 'Reply' }],
});

export const commentModel = mongoose.model<CommentInterface>('Comment', conmmentSchema);
