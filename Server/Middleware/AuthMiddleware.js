const jwt = require("jsonwebtoken");
const userModel = require('../Models/UserModel');

const AuthMiddleware = async (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ error: "Authentication required" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);

    if (!user) {
      throw new Error();
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
}

const isAuthentication = (req, res, next) => {
  try {
    const bearerHeader = req.headers['authorization'];
    const accessToken = bearerHeader.split(' ')[1];
    const decodeJwt = jwt.verify(accessToken, process.env.SECRET_JWT);
    req.userId = decodeJwt._id;
    next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return res.status(401).send('Token Expired');
    }
    return res.status(401).send('Authentication not valid');
  }
}

const isAdmin = async (req, res, next) => {
  try {
    const userId = req.userId;
    const user = await userModel.findById(userId);
    if (user.role === 'admin') {
      next();
    }
  } catch (error) {
    return res.status(401).send('Authentication not valid');
  }
}

module.exports = {
  isAuthentication: isAuthentication,
  isAdmin: isAdmin
}
