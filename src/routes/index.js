const { Router } = require('express');
const pokemonRouter = require("./")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.use("/pokemon", pokemonRouter);


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
