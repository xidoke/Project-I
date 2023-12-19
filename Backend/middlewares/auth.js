const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const authHeader = req.header("Authorization");

    if (!authHeader) {
        return res.sendStatus(401);
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
        return res.sendStatus(401);
    }

    try {
        const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.userId = user.id;
        next();
    } catch (err) {
        console.error(err);
        return res.status(403).json({ error: "Forbidden" });
    }
};

const expiresInAccessToken = "1y";
const expiresInRefreshToken = "1h";

const generateToken = (payload) => {
    const { id, username } = payload;

    const accessToken = jwt.sign({ id, username }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: expiresInAccessToken,
    });

    const refreshToken = jwt.sign({ id, username }, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: expiresInRefreshToken,
    });

    return { accessToken, refreshToken };
};

module.exports = { verifyToken, generateToken };
