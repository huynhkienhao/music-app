const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userModel = require("../Models/UserModel");

const multer = require("multer");
// const verify = require("./verifyToken");
// const upload = multer();

const generateToken = (user) => {
    const payload = {
        userId: user._id,
        username: user.username,
    };
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
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
            username: username,
            email: email,
            password: bcrypt.hashSync(password, 10),
            // role: {type: String, default: 'user}
            role: 'regular'
        });
        // const user = new userModel({
        //     username,
        //     email,
        //     password: bcrypt.hashSync(password, 10)
        // });

        // await user.save();
        return res.status(200).send('register user');
    } catch (error) {
        console.error("Error in registration:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

const login = async (req, res, next) => {
    try {
        const { username, password } = req.body;

        // Check email exit
        // const user = await userModel.findOne({ username });
        const user = await userModel.findOne({ email: req.body.email })

        if (!user) {
            return res.status(400).send('Email hoặc password không hợp lệ');
        }

        // Check password
        // const isPasswordValid = await bcrypt.compare(password, user.password);
        const isPassValid = bcrypt.compareSync(req.body.password, user.password);

        if (!isPassValid) {
            return res.status(400).send('Email hoặc password không hợp lệ');
        }

        // const token = generateToken(user);
        // res.json({ status: true, user, token });

        // Tạo JWT
        const jwtToken = jwt.sign({
            _id: user.id,
            username: user.username,
            role: user.role
        }, process.env.SECRET_JWT, {
            expiresIn: 300
        })

        return res.status(200).send({
            accessToken: jwtToken
        });
    } catch (error) {
        next(error);
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

