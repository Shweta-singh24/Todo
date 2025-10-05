// server.js
import express from "express";
import mongoose from "mongoose";
import todoRoutes from "./routes/todoRoutes.js";

const app = express();
app.use(express.json());

// ✅ MongoDB Connection
mongoose.connect("mongodb://localhost:27017/todoDB")
  .then(() => console.log("✅MongoDB Connected"))
  .catch(err => console.log(err));

// ✅ Routes
app.use("/api/todos", todoRoutes);

// ✅ Start Server
app.listen(5000, () => console.log("Server running on port 5000"));
