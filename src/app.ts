// app.ts
import express from "express";
import cors from "cors"; // 1. Import CORS here
import productRoutes from "./routes/product.routes";
import offerRoutes from "./routes/offer.routes";
import billRoutes from "./routes/bill.routes";

const app = express();

// 2. Apply CORS immediately after initializing app
app.use(cors({
  origin: "http://localhost:3000", // Be explicit about your frontend URL
  credentials: true
}));

// 3. Body parser
app.use(express.json());

// 4. Routes (Must come AFTER cors)
app.use("/api/products", productRoutes);
app.use("/api/offers", offerRoutes);
app.use("/api/bill", billRoutes);

export default app;