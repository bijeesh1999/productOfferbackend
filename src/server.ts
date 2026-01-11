// server.ts

import "dotenv/config"; // 🔥 BEST WAY
import app from "./app";
import { connectDB } from "./config/db";
import { startCronJobs } from "./config/cron";
import { PORT } from "./config/env";

connectDB();

// 2. Start Background Tasks
startCronJobs();

// 3. Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
