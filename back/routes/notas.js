const express = require("express");
const Router = express.Router();
const notasMethods = require("../controllers/notas");

//API/NOTAS/

Router.post("/newNota", notasMethods.createNote);
// elinimar una nota de un usuario;
Router.delete("/:id", notasMethods.DeleteNotas);
// finalizar nota
Router.put("/status/:id", notasMethods.FinalizarNota);
// actualizar una nota de un usuario;
Router.put("/:id", notasMethods.Actualizar);
// Buscador de notas
Router.get("/search", notasMethods.Search);
// nota pora id
Router.get("/:id", notasMethods.getNotaId);
// todas las notas de un usuario;
Router.get("/", notasMethods.NotasUser);

module.exports = Router;
