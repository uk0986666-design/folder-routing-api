
import express from "express";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// API home route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to User Management REST API",
    version: "1.0.0",
    endpoints: {
      getAllUsers: "GET /api/users",
      getSingleUser: "GET /api/users/:id",
      createUser: "POST /api/users",
      updateUser: "PUT /api/users/:id",
      deleteUser: "DELETE /api/users/:id"
    }
  });
});

// User routes
app.use("/api/users", userRoutes);

// Handle unknown routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
