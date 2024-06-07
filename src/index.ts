import express, { Request, Response } from 'express';

// Create an Express application
const app = express();

// Define a port number
const PORT: number = 3000;

// Define some routes
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

app.get('/about', (req: Request, res: Response) => {
  res.send('About page');
});

app.get('/contact', (req: Request, res: Response) => {
  res.send('Contact page');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
