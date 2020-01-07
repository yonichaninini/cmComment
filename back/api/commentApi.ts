import express from 'express';
import { commentModel } from '../models/comments';
import { CommentInterface } from '../models/comments';
import { ReplyInterface } from '../models/replys';
import { replyModel } from '../models/replys';

const commentApi = {
  //댓글 가져오기
  getComment: (req: express.Request, res: express.Response, next: express.NextFunction) => {
    commentModel
      .find({ post_id: req.params.post_id })
      .populate('children')
      .sort({ create_time: -1 })
      .then((comments: CommentInterface[]) => {
        res.json(comments);
      })
      .catch(err => {
        return res.status(500).send({ error: 'database failure' });
      });
  },

  //해당페이지에 댓글 추가
  postComment: (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const comment = new commentModel({
      create_time: new Date(),
      update_time: new Date(),
      comment: req.body.comment,
      post_id: req.body.post_id,
      user: req.body.user,
      children: [],
    });
    comment.save((err: any) => {
      if (err) {
        console.error(err);
        res.json({ result: 0 });
        return;
      }
      res.json({ result: 1 });
    });
  },

  //해당페이지에 대댓글 추가
  postReply: (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const reply = new replyModel({
      create_time: new Date(),
      update_time: new Date(),
      comment: req.body.comment,
      post_id: req.body.post_id,
      user: req.body.user,
      parents: req.body.parents,
    });
    reply.save((err: any) => {
      if (err) {
        console.log(err);
        res.json({ result: 0 });
      }
    });
    commentModel.updateOne({ _id: req.body.parents }, { $push: { children: reply._id } }, (err, row) => {
      if (err) {
        console.error(err);
      }
    });
  },
  //해당페이지이 댓글 수정
  putComment: (req: express.Request, res: express.Response, next: express.NextFunction) => {
    commentModel.findById(req.params._id, (err: any, comment: any) => {
      if (err) {
        return res.status(500).json({ error: 'database failure' });
      }
      if (!comment) return res.status(404).json({ error: 'comment not found' });
      comment.comment = req.body.comment;
      comment.update_time = new Date(req.body.update_time);
      comment.save((err: string) => {
        if (err) res.status(500).json({ error: 'failed to update' });
        res.json({ message: 'comment updated' });
      });
    });
  },
  //해당페이지의 댓글 삭제
  deleteComment: (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log(req.body.password);
    commentModel.deleteOne({ _id: req.body._id }, err => {
      if (err) return res.status(500).json({ error: 'database failure' });
      res.status(204).end();
    });
    replyModel.deleteOne({ _id: req.body._id }, err => {
      if (err) return res.status(500).json({ error: 'database failure' });
      res.status(204).end();
    });
  },
  //페이징
};
export default commentApi;
