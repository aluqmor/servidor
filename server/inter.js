const templates = {
    plantilla1: "<h1>Esta es la Plantilla 1</h1>",
    plantilla2: "<h1>Esta es la Plantilla 2</h1>"
  };
  
  function getTemplate(name) {
    return templates[name] || "<h1>Plantilla no encontrada</h1>";
  }
  
  module.exports = { getTemplate };;