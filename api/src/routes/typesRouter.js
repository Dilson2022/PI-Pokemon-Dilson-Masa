const {Router} = require("express")
const typeRouter = Router();


const {getAllType} = require("../handlers/typeHandler")

typeRouter.get("/", getAllType);
    
    

module.exports = typeRouter;