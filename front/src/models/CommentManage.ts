import { CommentDataShape } from '../typeShapes/comentShape';
import axios from 'axios';
export class CommentManage {
  comment: CommentDataShape[] = [];
  page_url: string = '';
  constructor(page_url: string) {
    this.page_url = page_url;
  }
  getCommentData(): Promise<CommentDataShape[]> {
    return new Promise((resolve: any, reject: any) => {
      axios
        .get<CommentDataShape[]>('/api/comment/' + this.page_url)
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
