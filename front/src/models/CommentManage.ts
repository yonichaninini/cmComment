import axios from 'axios';
import { CommentDataShape } from '../typeShapes/comentShape';
import { NativeError } from 'mongoose';

export class CommentManage {
  comment: CommentDataShape[] = [];
  post_id: string = '1';
  constructor(post_id: string) {
    post_id = '1';
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
  createReply(comment: string | undefined, _id: string | undefined, user_email: string | undefined, user_password: string | undefined): Promise<CommentDataShape[]> {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url: '/api/add_reply/1',
        data: {
          comment: comment,
          post_id: 1,
          user: {
            user_email: user_email,
            user_password: user_password,
          },
          parents: _id,
        },
      })
        .then(res => {})
        .catch(res => {
          alert('오류가 발생했습니다. 관리자에게 문의하시길 바랍니다.');
        });
    });
  }
  createComment(comment: string | undefined, user_email: string | undefined, user_password: string | undefined): Promise<CommentDataShape[]> {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url: '/api/add_comment/1',
        data: {
          comment: comment,
          post_id: 1,
          user: {
            user_email: user_email,
            user_password: user_password,
          },
        },
      })
        .then(res => {})
        .catch(err => {
          reject(err);
          alert('오류가 발생했습니다. 관리자에게 문의하시길 바랍니다.');
        });
    });
  }
  deleateComment(_id: string, password: string): Promise<CommentDataShape[]> {
    return new Promise((resolve, reject) => {
      axios({
        method: 'delete',
        url: '/api/delete_comment/' + this.post_id + '/' + _id,
        data: {
          _id: _id,
          password: password,
        },
      })
        .then(res => {
          window.location.reload();
        })
        .catch(err => {
          alert('삭제에 실패하였습니다. 관리자에게 문의하시기 바랍니다.');
          console.log(err);
        });
    });
  }
}
