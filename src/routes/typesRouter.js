const {Router} = require("express")

const typeRouter = Router();

typeRouter.get("/",(req,res) =>{
    res.send("Estoy en types")
})

module.exports = typeRouter;