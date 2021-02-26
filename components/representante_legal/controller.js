const use = require("./network");
const storage = require("./storage");

function addRepresentante(
  cedula,
  nombre,
  apellido,
  correo_electronico,
  telefono,
  fecha_creacion
) {
  return new Promise((resolve, reject) => {
    if (!cedula) {
      console.error("[MensajeControlado] No hay nombre de Representante");
      return reject("No existe Representante.");
    }
    // Se crea un objeto Carrera
    const fullRepresentante = {
      cedula: cedula,
      nombre: nombre,
      apellido: apellido,
      correo_electronico: correo_electronico,
      telefono: telefono,
      fecha_creacion: new Date(),
    };
    console.log(fullRepresentante);
    storage.addR(fullRepresentante);
    return resolve(fullRepresentante);
  });
}

function getRepresentante() {
  return new Promise((resolve, reject) => {
    resolve(storage.listR());
  });
}

module.exports = {
  addRepresentante,
  getRepresentante
};
