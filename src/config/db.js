import mongoose from 'mongoose';
import "dotenv/config";


// Your MongoDB connection URI. This should ideally be fetched from environment variables.
const mongoURI = process.env.MONGODB_URL;

// Connect to MongoDB using Mongoose
mongoose.connect(mongoURI);

// Get the default connection
const db = mongoose.connection;

// Event listeners for connection errors and successful connection
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB successfully");
});

// Export the connection for reuse in other parts of your application
export default db;
