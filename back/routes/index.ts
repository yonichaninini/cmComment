import express from 'express';

module.exports = function(app: express.Express) {
  //해당페이지의 댓글들 불러오기
  app.get('/api/comment/:page_url', (req: express.Request, res: express.Response) => {
    res.send('해당페이지의 댓글들 불러오기');
    res.end();
  });
  //해당페이지에 댓글 추가
  app.post('/api/comment/:page_url', (req: express.Request, res: express.Response) => {
    res.send('해당페이지에 댓글 추가');
    res.end();
  });
  //해당페이지의 특정 댓글 불러오기
  app.get('/api/comment/:page_url/:comment_id', (req: express.Request, res: express.Response) => {
    res.send('해당페이지의 특정 댓글 불러오기');
    res.end();
  });
  //해당페이지의 특정 댓글 수정
  app.put('/api/comment/:page_url/:comment_id', (req: express.Request, res: express.Response) => {
    res.send('해당페이지의 특정 댓글 수정');
    res.end();
  });
  //해당페이지의 특정 댓글 삭제
  app.delete('/api/comment/:page_url/:comment_id', (req: express.Request, res: express.Response) => {
    res.send('해당페이지의 특정 댓글 삭제');
    res.end();
  });
};
