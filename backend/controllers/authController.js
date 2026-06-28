const bcrypt = require("bcryptjs");
const User = require("../models/User")

const registro = async (req, res, next) => {
    try{// Intentamos
        const {username, email, password} = req.body ; //desglosar username y password del body
        if (!username || !password){ // sí, no hay username o password, entonces responde que se precisan los campos
            return res.json ("Los campos Usuario y Contraseña son obligatorios ")
        }
        const exists = await User.findOne({ where: {username}}); // creamos la instancia de existencia con userActivation, y sacamos el userma del body
        if (exists){ //si existe, responde que ya existe el usuario
            return res.json("Error: el usuario ingresado ya existe");
        }
        const hashed = await bcrypt.hash(password, 10);  // Hashed es las veces en las que va a cambiar la contraseña para hacerla segura, se recomienda de 3 a 12, porque sino puede tardar bastante en terminar
        const user = await User.create({ username,email, password: hashed }); // aca se establece un user, que va a ser creado con el nombre de usuario y la contraseña hasheada
        res.json (`Usuario ${user.username} se ha creado correctamente`) //y procede a responder que el uruario ya se creo
    } catch (err) { // en caso de error seguir con next
        next(err);
    }
};

const login = async (req, res, next) => {
    try { //Intenta
        const { username, password} = req.body; // Desglosar username y passwor del body
        const user = await User.findOne({ where: {username}});  
        if (!user){ // si el usuario no coincide , responde usuario incorrecto
            return  res.json ("Usuario Incorrecto")
        }
        const valido = await bcrypt.compare(password, user.password);// crea la instancia de validación, comparamos password que anteriormente descglosamos del bosy y lo comparamos con el extraido de la base de datos
        if (!valido) { // Si la instancia de validacion no se cumple , responde contraseña incorrecta 
            return res.json ("Contraseña incorrecto")
        } 
     }catch (err){// en caso de error pasa al siguiente
        next(err);
     }
};
module.exports = { registro, login };