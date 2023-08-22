import express, { Express } from 'express';
import cors from 'cors';
import { today, thisWeek, thisMonth } from '../interfaces/posts';

const app: Express = express();
app.use(cors());

app.get('/posts', (_, res) => {
  res.json([today, thisWeek, thisMonth]);
});

app.listen(8000, () => {
  console.log('Listening on port 8000');
});
