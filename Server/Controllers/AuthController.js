const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const userModel = require("../Models/UserModel");

const multer = require("multer");
const verify = require("./verifyToken");
const upload = multer();

const generateToken = (user) => {
    const payload = {
        userId: user._id,
        username: user.username,
    };
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
};

const login = async (req, res, next) => {
    try {
        const { username, password } = req.body;

        // Find user by username
        const user = await userModel.findOne({ username });
        if (!user)
            return res
                .status(401)
                .json({ msg: "Incorrect Username or Password", status: false });

        // Compare passwords
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid)
            return res
                .status(401)
                .json({ msg: "Incorrect Username or Password", status: false });

        // If username and password are correct, generate token and send response
        const token = generateToken(user);
        res.json({ status: true, user, token });
    } catch (error) {
        next(error); // Pass the error to the error handling middleware
    }
};

const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res
                .status(400)
                .json({ message: "Username, Email and Password are required" });
        }

        await userModel.create({
            username,
            email,
            password: bcrypt.hashSync(password, 10),
            // role: {type: String, default: 'user}
            role: 'regular'
        });
        // const user = new userModel({
        //     username,
        //     email,
        //     password: hashedPassword,
        // });

        // await user.save();
        return res.status(200).send('register user');
    } catch (error) {
        console.error("Error in registration:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

const logOut = (req, res, next) => {
    try {
        res.clearCookie("token").json("Logged out");
    } catch (ex) {
        next(ex);
    }
};

module.exports = {
    register: register,
    login: login,
    logOut: logOut
}

// module.exports.getAdminProfile = async (req, res, next) => {

//   try {
//     const adminProfile = await User.findOne(); // You need to implement this function

//     // Check if admin profile data is retrieved successfully
//     if (adminProfile) {
//       // Send the admin profile data as JSON response
//       res.json({ AdminProfile: adminProfile, successMsg: 'Admin profile retrieved successfully' });
//     } else {
//       // If admin profile data retrieval fails, send an error response
//       res.status(500).json({ errorMsg: 'Failed to retrieve admin profile' });
//     }
//   } catch (error) {
//     console.error('Error retrieving admin profile:', error);
//     res.status(500).json({ errorMsg: 'Error retrieving admin profile' }); // Return an error response
//   }
// };

// module.exports.getAllUsers = async (req, res, next) => {
//   try {
//     const users = await User.find({ _id: { $ne: req.params.id } }).select([
//       "email",
//       "username",
//       "avatarImage",
//       "_id",
//     ]);
//     return res.json(users);
//   } catch (ex) {
//     next(ex);
//   }
// };

// module.exports.setAvatar = async (req, res, next) => {
//   try {
//     const userId = req.params.id;
//     const avatarImage = req.body.image;
//     const userData = await User.findByIdAndUpdate(
//       userId,
//       {
//         isAvatarImageSet: true,
//         avatarImage,
//       },
//       { new: true }
//     );
//     return res.json({
//       isSet: userData.isAvatarImageSet,
//       image: userData.avatarImage,
//     });
//   } catch (ex) {
//     next(ex);
//   }
// };
