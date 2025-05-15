import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI;

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (!MONGO_URI) {
    // Throw error if MONGO_URI is not defined when the function is called
    throw new Error(
      'Please define the MONGO_URI environment variable inside .env file for database connection.'
    );
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGO_URI, opts).then((mongoose) => {
      console.log("MongoDB Connected");
      return mongoose;
    }).catch(err => {
      console.error("MongoDB Connection Error:", err.message);
      // Clear promise on error so subsequent calls can retry
      cached.promise = null; 
      throw err; 
    });
  }
  
  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null; // Ensure promise is cleared on error
    throw e; // Re-throw error to be caught by caller
  }
  
  return cached.conn;
}

export default dbConnect;
