import { UserDataShape } from './userDataShape';

export interface CommentDataShape {
  _id: string;
  create_time: number;
  update_time: number;
  page_url: string;
  user: UserDataShape;
  comment: string;
  children: ReplyDataShape[];
}
export interface ReplyDataShape {
  _id: string;
  create_time: number;
  update_time: number;
  page_url: string;
  user: UserDataShape;
  comment: string;
  parents: number;
}
