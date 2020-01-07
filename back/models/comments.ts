import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

export interface CommentInterface extends mongoose.Document {
  create_time: string;
  update_time: string;
  post_id: number;
  user: {
    user_email: string;
    user_password: string;
  };
  comment: string;
  children: [];
}
const conmmentSchema = new Schema({
  create_time: Date,
  update_time: Date,
  post_id: Number,
  user: {
    user_email: String,
    user_password: String,
  },
  comment: String,
  children: [{ type: ObjectId, ref: 'Reply' }],
});

export const commentModel = mongoose.model<CommentInterface>('Comment', conmmentSchema);
