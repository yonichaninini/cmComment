import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import config from './config/config.json';
import commentApi from './api/commentApi';

import autoIncrement from 'mongoose-auto-increment';
import conmmentSchema from './models/comments';
const app = express();
const port = config.PORT || 4000;
app.use(bodyParser.json());
dotenv.config({ path: __dirname + '/config/.env' });

const connection = mongoose.createConnection(config.MONGO_URL || '', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useCreateIndex', true);

autoIncrement.initialize(connection);

connection.on('error', console.error);
connection.once('open', function() {
  console.log('Connected to mongod server');
});

conmmentSchema.plugin(autoIncrement.plugin, { model: 'Comment', field: 'comment_id', startAt: 1, increment: 1 });

app.get('/api/comment/:page_url', commentApi.getComment);
app.post('/api/comment/:page_url', commentApi.postComment);
app.post('/api/comment/:page_url/:parents_id', commentApi.postReply);
app.put('/api/comment/:page_url/:comment_id', commentApi.putComment);
app.delete('/api/comment/:page_url:comment_id', commentApi.deleteComment);

// [RUN SERVER]
app.listen(port, () => {
  console.log('Express server has started on port ' + port);
});
