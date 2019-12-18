import { UserDataShape } from "./userDataShape";

export interface CommentDataShape {
  comment_id: number;
  creation_time: string;
  post_id: number;
  user: UserDataShape;
  comment: string;
  children: ReplyDataShape[];
}
export interface ReplyDataShape {
  comment_id: number;
  creation_time: string;
  post_id: number;
  user: UserDataShape;
  comment: string;
  parents: number;
}
