const jwt = require("jsonwebtoken");

const verificarToken = (req, res, next) => {
    const authHeader = req.header("Authorization") || req.header("authorization");

    if (!authHeader) {
        return res.status(401).json("Error: Token no proporcionado");
    }

    const token = authHeader.startsWith("Bearer ") 
        ? authHeader.split(" ")[1] 
        : authHeader;

    jwt.verify(token, "key_token", (err, user) => {
        if (err) {
            return res.status(403).json("Acceso denegado: token inválido o expirado");
        }
        
        req.user = user;
        next();
    });
};

module.exports = verificarToken;