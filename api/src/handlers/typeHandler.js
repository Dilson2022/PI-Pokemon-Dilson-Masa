const {getTypes} = require("../controllers/typeControllers")

const getAllType = async (req, res) => {
    try {

        const types = await getTypes();
        res.status(200).json(types)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};



module.exports = {
    getAllType
};