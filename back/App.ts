import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import commentApi from './api/commentApi';
import config from './config/config.json';

const app = express();
const port = process.env.PORT || 4000;
app.use(bodyParser.json());
dotenv.config({ path: __dirname + '/config/.env' });

const db = mongoose.connection;
const { ObjectId } = require('mongodb');
console.log(ObjectId());
mongoose.connect(config.MONGO_URL, { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true }, (err: any) => {
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

app.get('/api/comment/:post_id', commentApi.getComment);
app.post('/api/add_comment/:post_id', commentApi.postComment);
app.post('/api/add_reply/:post_id', commentApi.postReply);
app.put('/api/update_comment/:post_id/:_id', commentApi.putComment);
app.delete('/api/delete_comment/:post_id/:_id', commentApi.deleteComment);

// [RUN SERVER]
app.listen(port, () => {
  console.log('Express server has started on port ' + port);
});
