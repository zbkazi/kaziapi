import express, { Request, Response } from 'express';

// Create an Express application
const app = express();

// Define a port number
const PORT: number = parseInt(process.env.PORT || '4000', 10);

// Define some routes
app.get('/', (_req: Request, res: Response) =>{
  res.status(200).send('hello kazi api')
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
