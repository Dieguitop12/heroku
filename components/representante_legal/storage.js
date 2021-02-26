const Model = require("./model");
const representante = require("../representante_legal/model");

function addRepresentante(representante) {
  const objeto = new Model(representante);
  objeto.save();
}

async function getRepresentante() {
  const objetos = await Model.find();
  return objetos;
}

module.exports = {
  addR: addRepresentante,
  listR: getRepresentante
};
