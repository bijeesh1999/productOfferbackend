// server.ts

import app from "./app";
import { connectDB } from "./config/db";
import { startCronJobs } from "./config/cron";
import { PORT } from "./config/env";
import cors from "cors";

const corsOptions = {
  // Replace this with your actual Vercel URL
  origin: process.env.FRONTEND_URL,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

// 0. Apply CORS Middleware
// (Important: Must be applied before routes are defined in 'app')
app.use(cors(corsOptions));
// 1. Connect to Database
connectDB();

// 2. Start Background Tasks
startCronJobs();

// 3. Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
