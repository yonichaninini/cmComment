import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import commentApi from './api/commentApi';

const app = express();
const port = process.env.PORT || 4000;
app.use(bodyParser.json());
dotenv.config({ path: __dirname + '/config/.env' });

const db = mongoose.connection;

mongoose.connect('mongodb://localhost:27017/commentDB', { useNewUrlParser: true, useFindAndModify: false }, (err: any) => {
  if (err) {
    console.log(err);
  } else {
    console.log('success');
  }
});

db.on('error', console.error);
db.once('open', function() {
  console.log('Connected to mongod server');
});

app.get('/api/comment/:page_url', commentApi.getComment);
app.post('/api/comment/:page_url', commentApi.postComment);
app.post('/api/comment/:page_url/:parents_id', commentApi.postReply);
app.put('/api/comment/:page_url/:comment_id', commentApi.putComment);
app.delete('/api/comment/:page_url:comment_id', commentApi.deleteComment);

// [RUN SERVER]
app.listen(port, () => {
  console.log('Express server has started on port ' + port);
});
