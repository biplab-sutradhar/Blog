const express = require('express');
const app = express();
import { Request, Response } from 'express';

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

app.post('/blogs', (req: Request, res: Response) => {});
app.get('/blogs:id', (req: Request, res: Response) => {});
app.get('/blogs', (req: Request, res: Response) => {});
app.patch('/blogs:id', (req: Request, res: Response) => {});
app.delete('/blogs:id', (req: Request, res: Response) => {});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
