const axios = require("axios");
const { Types } = require("../db");

const getTypes = async () => {
  const typesdb = await Types.findAll();
  if (typesdb.length) {
    return typesdb;
  } else {
    //console.log(types)
    const types = (
      await axios.get("https://pokeapi.co/api/v2/type")
    ).data.results
      .filter((types) => types.name !== null)
      .map((types) => ({
        id: types.id,
        name: types.name,
      }));
    await Types.bulkCreate(types);
    return await Types.findAll();
  }
};

module.exports = {
  getTypes,
};
