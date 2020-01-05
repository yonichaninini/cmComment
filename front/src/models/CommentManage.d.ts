import { CommentDataShape } from '../typeShapes/comentShape';
export declare class CommentManage {
  comment: CommentDataShape[];
  post_id: string;
  constructor(post_id: string);
  getCommentData(): Promise<CommentDataShape[]>;
  createComment(): CommentDataShape[];
  createReply(): CommentDataShape[];
  updateComment(): CommentDataShape[];
  deleateComment(): CommentDataShape[];
}
