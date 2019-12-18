import express from 'express';
import { commentModel } from '../models/comments';
import { CommentInterface } from '../models/comments';

const commentApi = {
  //댓글 가져오기
  getComment: (req: express.Request, res: express.Response, next: express.NextFunction) => {
    commentModel.find((err: string, comments: CommentInterface[]) => {
      if (err) {
        return res.status(500).send({ error: 'database failure' });
      }
      res.json(comments);
    });
  },

  //해당페이지에 댓글 추가
  postComment: (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const comment = new commentModel();
    comment.comment = req.body.comment;
    comment.post_id = req.body.post_id;
    comment.creation_time = req.body.creation_time;
    comment.save((err: any) => {
      if (err) {
        console.error(err);
        res.json({ result: 0 });
        return;
      }

      res.json({ result: 1 });
    });
    res.end();
  },

  //해당페이지에 대댓글 추가
  postReply: (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const comment = new commentModel();
    comment.comment = req.body.comment;
    comment.post_id = req.body.post_id;
    //comment.parents_id = req.body.parents_id;
    comment.creation_time = req.body.creation_time;
    comment.save((err: any) => {
      if (err) {
        console.error(err);
        res.json({ result: 0 });
        return;
      }

      res.json({ result: 1 });
    });
  },

  putComment: (req: express.Request, res: express.Response, next: express.NextFunction) => {
    commentModel.findById(req.params.comment_id, (err: any, comment: any) => {
      if (err) {
        return res.status(500).json({ error: 'database failure' });
      }
      if (!comment) return res.status(404).json({ error: 'comment not found' });
      comment.comment = req.body.comment;
      comment.creation_time = new Date(req.body.creation_time);
      comment.save((err: string) => {
        if (err) res.status(500).json({ error: 'failed to update' });
        res.json({ message: 'comment updated' });
      });
    });
  },

  deleteComment: (req: express.Request, res: express.Response, next: express.NextFunction) => {
    commentModel.remove({ comment_id: req.body.comment_id }, (err: any) => {
      if (err) return res.status(500).json({ error: 'database failure' });
      res.status(204).end();
    });
  },
};
export default commentApi;
//해당페이지의 댓글들 불러오기
