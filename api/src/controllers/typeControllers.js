const axios = require("axios");

const {Type} = require("../db");

const getAll = async () => {
    if(await Type.count() === 0){
        
    }
}