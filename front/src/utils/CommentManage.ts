import axios from 'axios';
import { CommentDataShape } from '../typeShapes/comentShape';

let comment: CommentDataShape[] = [];

export function getCommentData(page_url: string): Promise<CommentDataShape[]> {
  return new Promise((resolve, reject) => {
    axios
      .get<CommentDataShape[]>('/api/comment/' + page_url, {
        params: page_url,
      })
      .then(res => {
        comment = res.data;
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}
export function createReply(page_url: string, comment: string | undefined, _id: string | undefined, user_email: string | undefined, user_password: string | undefined): Promise<CommentDataShape[]> {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: '/api/add_reply/' + page_url,
      data: {
        comment: comment,
        page_url: 1,
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
export function createComment(page_url: string, comment: string | undefined, user_email: string | undefined, user_password: string | undefined): Promise<CommentDataShape[]> {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url: '/api/add_comment/' + 'page_url',
      data: {
        comment: comment,
        page_url: page_url,
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
export function deleateComment(page_url: string, _id: string, password: string): Promise<CommentDataShape[]> {
  return new Promise((resolve, reject) => {
    axios({
      method: 'delete',
      url: '/api/delete_comment/' + page_url + '/' + _id,
      data: {
        _id: _id,
        password: password,
      },
    })
      .then(res => {})
      .catch(err => {
        alert('삭제에 실패하였습니다. 관리자에게 문의하시기 바랍니다.');
        console.log(err);
      });
  });
}
