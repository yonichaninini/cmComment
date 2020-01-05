import mongoose from 'mongoose';

export interface ReplyInterface extends mongoose.Document {
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
}
const Schema = mongoose.Schema;

const replySchema = new Schema({
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
  parents: Number,
});

export const replyModel = mongoose.model<ReplyInterface>('Reply', replySchema);
