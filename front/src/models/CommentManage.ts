import { CommentDataShape } from '../typeShapes/comentShape';
import axios from 'axios';
export class CommentManage {
  comment: CommentDataShape[] = [];
  post_id: string = '1';
  constructor(post_id: string) {
    this.post_id = '1';
  }
  getCommentData(): Promise<CommentDataShape[]> {
    return new Promise((resolve, reject) => {
      axios
        .get<CommentDataShape[]>('/api/comment/' + this.post_id, {
          params: this.post_id,
        })
        .then(res => {
          this.comment = res.data;
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
  createComment(): CommentDataShape[] {
    return [];
  }
  createReply(): CommentDataShape[] {
    return [];
  }
  updateComment(): CommentDataShape[] {
    return [];
  }
  deleateComment(): CommentDataShape[] {
    return [];
  }
}
