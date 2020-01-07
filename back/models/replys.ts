import mongoose from 'mongoose';

export interface ReplyInterface extends mongoose.Document {
  comment_id: number;
  creation_time: string;
  post_id: number;
  user: {
    user_email: string;
    user_password: string;
  };
  comment: string;
  parents: string;
}
const Schema = mongoose.Schema;

const replySchema = new Schema({
  create_time: Date,
  update_time: Date,
  post_id: Number,
  user: {
    user_email: String,
    user_password: String,
  },
  comment: String,
  parents: String,
});

export const replyModel = mongoose.model<ReplyInterface>('Reply', replySchema);
