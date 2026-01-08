// server.ts

import app from "./app";
import { connectDB } from "./config/db";
import { startCronJobs } from "./config/cron";
import { PORT } from "./config/env";
import cors from "cors";

// 0. Apply CORS Middleware
// (Important: Must be applied before routes are defined in 'app')
app.use(cors());
// 1. Connect to Database
connectDB();

// 2. Start Background Tasks
startCronJobs();


// 3. Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
