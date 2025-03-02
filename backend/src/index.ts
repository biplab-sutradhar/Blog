const express = require('express');
const app = express();
import { Request, Response } from 'express';

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

app.post('/blogs', (req: Request, res: Response) => {
  res.send('Create a new blog');
});
app.get('/blogs:id', (req: Request, res: Response) => {
  res.send('Get a blog by ID');
});
app.get('/blogs', (req: Request, res: Response) => {
  res.send('Get all blogs');
});
app.patch('/blogs:id', (req: Request, res: Response) => {
  res.send('Update a blog by ID');
});
app.delete('/blogs:id', (req: Request, res: Response) => {
  res.send('Delete a blog by ID');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
