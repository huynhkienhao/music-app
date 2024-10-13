const jwt = require('jsonwebtoken');

const getListUser = (req, res) => {
    // 1. Get token from Client
    const bearerHeader = req.headers['authorization'];
    const accessToken = bearerHeader.split(' ')[1];

    // 2. Verify Token
    const decodeJwt = jwt.verify(accessToken, process.env.SECRET_JWT);
    console.log(decodeJwt);
}

const userDetail = (req, res) => {
    res.send('detail users');
}

module.exports = {
    getListUser: getListUser,
    userDetail: userDetail
}