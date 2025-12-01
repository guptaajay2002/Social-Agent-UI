import express from "express";
import cors from "cors";
import homeRoute from "./routes/home.js";
import featuresRoute from "./routes/features.js";
import pricingRoute from "./routes/pricing.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/home", homeRoute);
app.use("/api/features", featuresRoute);
app.use("/api/pricing", pricingRoute);

const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
