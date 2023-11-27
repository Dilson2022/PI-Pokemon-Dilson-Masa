const {Router} = require("express")

const typeRouter = Router();

const typeControllers = require("../controllers/typeControllers")

typeRouter.get("/",async (req,res) =>{
    
    try {
        const types = await typeControllers.getAll();
        res.status(200).json(types);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
  
})

module.exports = typeRouter;