const express = require('express');
const Router  = express.Router();
const notasMethods = require('../controllers/notas');


//API/NOTAS/

Router.post('/newNota' , notasMethods.createNote);
// todas las notas de un usuario;
Router.get('/:id' , notasMethods.NotasUser);
// elinimar una nota de un usuario;
Router.delete('/:id' , notasMethods.DeleteNotas);
// actualizar una nota de un usuario;
Router.put('/:id' , notasMethods.Actualizar);



module.exports = Router;