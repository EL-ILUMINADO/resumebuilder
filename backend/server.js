require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const resumeRoutes = require("./routes/resumeRoutes");

const app = express();

// middleware to handle CORS

app.use(
  cors({
    origin: "https://resumebuilder-frontend-1rm4.onrender.com",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

//  connect mongodb database

connectDB();

// middleware

app.use(express.json());

// routes

app.use("/api/auth", authRoutes);
app.use("/api/resume", resumeRoutes);

// Serve uploads folder

// app.use(
//   "/uploads",
//   express.static(path.join(__dirname, "uploads"), {
//     setHeaders: (res, path) => {
//       res.set(
//         "Access-Control-Allow-Origin",
//         "https://resumebuilder-frontend-1rm4.onrender.com"
//       );
//     },
//   })
// );

const allowedOrigins = [
  "https://resumebuilder-frontend-1rm4.onrender.com",
  "http://localhost:5173",
];

const uploadsPath = path.join(__dirname, "/uploads");

app.use(
  "/uploads",
  cors({
    origin: "https://resumebuilder-frontend-1rm4.onrender.com", // Frontend origin
    credentials: true,
  }),
  express.static(uploadsPath)
);

// start server

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
