const Newsletter = require("../models/newsletter");


const suscribeEmail = (req, res) => {
    
    const { email } = req.params;
    const newsletter = new Newsletter();


    if ( !email ) {
        res.status(404).send({ code: 404, message: "El email es obligatorio" });
    } else {
        newsletter.email = email.toLowerCase();
        newsletter.save( ( err, newsletterStored ) => {
            if ( err ) {
                res.status(500).send({ code: 500, message: "El email ya existe." });
            } else {
                if ( !newsletterStored ) {
                    res.status(400).send({ code: 400, message: "Error al registrar en la newsletter." });
                } else {
                    res.status(200).send({ code: 200, message: "Email registrado correctamente." })
                }
            }
        } )
    }
    

};

module.exports = {
    suscribeEmail
}