import express from 'express';
import { Request, Response } from 'express';
import 'dotenv/config';
import connectDB from './config/db'; // Assuming you have a db.ts file for database connection

const app = express();
app.use(express.json());

interface User {
  id: number;
  name: string;
}
connectDB();
let users: User[] = [];

// // Root endpoint
// app.get('/', (req: Request, res: Response) => {
//   res.send('Hello World');
// });

// // Blog endpoints
// app.post('/blogs', (req: Request, res: Response) => {
//   res.send('Create a new blog');
// });
// app.get('/blogs/:id', (req: Request, res: Response) => {
//   res.send('Get a blog by ID');
// });
// app.get('/blogs', (req: Request, res: Response) => {
//   res.send('Get all blogs');
// });
// app.patch('/blogs/:id', (req: Request, res: Response) => {
//   res.send('Update a blog by ID');
// });
// app.delete('/blogs/:id', (req: Request, res: Response) => {
//   res.send('Delete a blog by ID');
// });

// // User endpoints
// app.post('/users', (req: Request, res: Response) => {
//   // Add a new user to the users array
//   const newUser: User = req.body; // Assuming the request body contains user data
//   users.push(newUser);
//   res.status(201).json(newUser); // Respond with the created user
// });

// app.get('/users', (req: Request, res: Response) => {
//   // Send the entire users array as a response
//   res.json(users);
// });

// app.get('/users/:id', (req: Request, res: Response) => {
//   // Find and send a specific user by ID
//   const userId = parseInt(req.params.id);
//   const user = users.find(u => u.id === userId);
//   if (user) {
//     res.json(user);
//   } else {
//     res.status(404).json({ message: "User not found" });
//   }
// });

// app.patch('/users/:id', (req: Request, res: Response) => {
//   // Update a user by ID
//   const userId = parseInt(req.params.id);
//   const userIndex = users.findIndex(u => u.id === userId);
//   if (userIndex !== -1) {
//     users[userIndex] = { ...users[userIndex], ...req.body }; // Merge existing user with updated data
//     res.json(users[userIndex]);
//   } else {
//     res.status(404).json({ message: "User not found" });
//   }
// });

// app.delete('/users/:id', (req: Request, res: Response) => {
//   // Delete a user by ID
//   const userId = parseInt(req.params.id);
//   const userIndex = users.findIndex(u => u.id === userId);
//   if (userIndex !== -1) {
//     users.splice(userIndex, 1); // Remove the user from the array
//     res.status(204).send(); // Respond with a No Content status
//   } else {
//     res.status(404).json({ message: "User not found" });
//   }
// });

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
