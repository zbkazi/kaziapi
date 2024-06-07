import express, { Request, Response } from 'express';

// Create an Express application
const app = express();

// Define a port number
const PORT = process.env.PORT || 4000;

// Define some routes
app.get('/', (_req: Request, res: Response) => {
  res.send('Hello, World!');
});

app.get('/about', (_req: Request, res: Response) => {
  res.send('About page');
});

app.get('/contact', (_req: Request, res: Response) => {
  res.send('Contact page');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
