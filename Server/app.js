const express = require("express");
const app = express();
const cors = require('cors');

const mongoose = require("mongoose");

const connectDb = require('./Services/ConnectDbService');
const userRoute = require('./Router/UserRoute');
const authRoute = require('./Router/AuthRoute');

// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");
const userModel = require("./Models/UserModel");
// const Favorites = require("./models/Favorites");
// const Song = require("./models/Song");
// const Category = require("./models/Category");
const cookieParser = require("cookie-parser");
const categoryRouter = require("./Router/category");
const songRouter = require("./Router/song");
const favoriteRouter = require("./Router/favorite");
// const multer = require("multer");

// Load environment variables
require("dotenv").config();

// Middleware apply cors add all request
app.use(cors());

// Middleware get info from client by req.body
app.use(express.json());

app.use(cookieParser());

app.use("/uploads", express.static(__dirname + "/uploads")); // Serve static files

module.exports = app;

// Connect database
connectDb();

// Function to generate JWT token
app.get("/api/getAdminProfile", async (req, res) => {
    try {
        const adminProfile = await userModel.findOne(); // You need to implement this function

        // Check if admin profile data is retrieved successfully
        if (adminProfile) {
            // Send the admin profile data as JSON response
            res.json({
                AdminProfile: adminProfile,
                successMsg: "Admin profile retrieved successfully",
            });
        } else {
            // If admin profile data retrieval fails, send an error response
            res.status(500).json({ errorMsg: "Failed to retrieve admin profile" });
        }
    } catch (error) {
        console.error("Error retrieving admin profile:", error);
        res.status(500).json({ errorMsg: "Error retrieving admin profile" }); // Return an error response
    }
});

const suggestedSongs = [
    {
        songName: "Song 1",
        artist: "Artist 1",
        song: "song1.mp3",
        imgSrc: "song1.jpg",
    },
    {
        songName: "Song 2",
        artist: "Artist 2",
        song: "song2.mp3",
        imgSrc: "song2.jpg",
    },
    {
        songName: "Song 3",
        artist: "Artist 3",
        song: "song3.mp3",
        imgSrc: "song3.jpg",
    },
];

// Tạo API cho gợi ý bài hát
app.get("/api/suggested-songs", (req, res) => {
    res.json(suggestedSongs); // Trả về dữ liệu gợi ý nhạc
});

// Middleware Router
app.use("/api", authRoute);
app.use("/users", userRoute);
// app.use("/api/auth", authRoute);
app.use("/api", songRouter);
app.use("/api", categoryRouter);
app.use("/api", favoriteRouter);

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

