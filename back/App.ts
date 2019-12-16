import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();

dotenv.config({ path: __dirname + '/config/.env' });

const port = process.env.PORT || 4000;

app.use(bodyParser.json());

const router = require('./routes')(app);

const db = mongoose.connection;
db.on('error', console.error);
db.once('open', function() {
  console.log('Connected to mongod server');
});

mongoose.connect('mongodb://localhost/comment', { useNewUrlParser: true, useUnifiedTopology: true });

// [RUN SERVER]
const server = app.listen(port, function() {
  console.log('Express server has started on port ' + port);
});
