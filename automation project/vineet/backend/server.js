// import express from 'express';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import announcementRoutes from './routes/announcements.js';
// import dotenv from "dotenv";

// // Load environment variables
// dotenv.config();

// const app = express();

// app.use(cors());
// app.use(express.json());

// // Routes
// app.use('/announcements', announcementRoutes);

// // Debugging: Check if MONGO_URI is loaded
// console.log("Mongo_URI:", process.env.MONGO_URI);

// // Database connection

// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => app.listen(5000, () => console.log('Server running on port 5000')))
//     .catch((error) => console.error('Connection error:', error));


import dotenv from "dotenv";
dotenv.config(); // Load environment variables before anything else

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import announcementRoutes from './routes/announcements.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Debugging: Ensure MONGO_URI is loaded
if (!process.env.MONGO_URI) {
    console.error("❌ MONGO_URI is not defined. Check your .env file.");
    process.exit(1);
}
console.log("✅ Using MongoDB URI:", process.env.MONGO_URI);

// Database Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('✅ Connected to MongoDB');
        app.listen(5000, () => console.log('🚀 Server running on port 5000'));
    })
    .catch((error) => {
        console.error('❌ MongoDB Connection Error:', error);
        process.exit(1); // Exit process if connection fails
    });

// Routes
app.use('/announcements', announcementRoutes);
