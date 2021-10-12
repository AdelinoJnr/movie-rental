const jwt = require('jsonwebtoken');
require('dotenv').config();

const { SECRET = 'minhasenha' } = process.env;

const authToken = (req, res, next) => {
  const { authorization: token } = req.headers;
  if (!token) res.status(400).json({ message: "Token invalid!" });

  try {
    const { data } = jwt.verify(token, SECRET);
    req.user = data;

    return next();
  } catch (_e) {
    return res.status(400).json({ message: "Token invalid!" });
  }
};

module.exports = authToken;