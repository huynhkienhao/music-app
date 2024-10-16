const jwt = require('jsonwebtoken');
const userModel = require('../Models/UserModel');
const bcrypt = require('bcrypt');

const getListUser = async (req, res) => {
    // 1. Get token from Client
    const bearerHeader = req.headers['authorization'];
    const accessToken = bearerHeader.split(' ')[1];

    try {
        // 2. Verify Token
        const decodeJwt = jwt.verify(accessToken, process.env.SECRET_JWT);
        if (decodeJwt) {
            const users = await userModel.find();
            res.status(200).send(users);
        }
    } catch (error) {
        if (error instanceof jwt.TokenExpiredError) {
            return res.status(401).send('Token Expired');
        }
    }
}

const postUser = (req, res) => {
    // 1. Get token from Client
    const bearerHeader = req.headers['authorization'];
    const accessToken = bearerHeader.split(' ')[1];

    try {
        // 2. Verify Token
        const decodeJwt = jwt.verify(accessToken, process.env.SECRET_JWT);
        if (decodeJwt && decodeJwt.role === 'admin') {
            // 3. Save data to user collection (lưu data vào database)
            const { username, password, email, role } = req.body;
            userModel.create({
                username: username,
                password: bcrypt.hashSync(password, 10),
                email: email,
                role: role
            })
            res.status(200).send('create user successfully');
        }
    } catch (error) {

    }
}

module.exports = {
    getListUser: getListUser,
    postUser: postUser
}