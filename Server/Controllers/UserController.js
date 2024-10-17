const jwt = require('jsonwebtoken');
const userModel = require('../Models/UserModel');
const bcrypt = require('bcrypt');

const getListUser = async (req, res) => {
    try {
        const users = await userModel.find();
        return res.status(200).send(users);
    } catch (error) {

    }
}

const postUser = (req, res) => {
    try {
        // 3. Save data to user collection (lưu data vào database)
        const { username, password, email, role } = req.body;
        userModel.create({
            username: username,
            password: bcrypt.hashSync(password, 10),
            email: email,
            role: role
        })
        return res.status(200).send('create user successfully');
    } catch (error) {

    }
}

const deleteUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        await userModel.findByIdAndDelete(userId);
        return res.status(200).send('create user successfully');
    } catch (error) {

    }
}

module.exports = {
    getListUser: getListUser,
    postUser: postUser,
    deleteUser: deleteUser
}