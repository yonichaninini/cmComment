export interface CommentDataShape {
  id: string;
  creation_time: string;
  post_id: number;
  user_id: string;
  comment_id: number;
  comment: string;
  children: ReplyDataShape[];
}
export interface ReplyDataShape {
  id: string;
  creation_time: string;
  post_id: number;
  user_id: string;
  comment_id: number;
  comment: string;
  parents: number;
}
