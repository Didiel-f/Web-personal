const jwt = require("jwt-simple");
const moment = require("moment");

const SECRET_KEY = "xL93dl3KD8DhE8SK3ekKdjj345Kdj3KjHUX";

exports.ensureAuth = ( req, res, next ) => {
    if ( !req.headers.authorization ) {
        return res.status(403).send({ message: "La petición no tiene cabecera de autenticación." });
    }

    const token = req.headers.authorization.replace(/['"]+/g, "");

    try {
        var payload = jwt.decode( token, SECRET_KEY );

        if ( payload.exp <= moment.unix() ) {
            return res.status(404).sens({ message: "El token ha expirado" });
        }

    } catch( ex ) {
        // console.log( ex ); Por si quisiera verlo luego
        return res.status(404).send({ message: "Token invalido" });
    }

    req.user = payload;
    next();
    
}