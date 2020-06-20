const User = require('./user');
const Nota = require('./nota');

Nota.belongsTo(User, {as:'nota' , foreignKey:'noteId'});

module.exports = {User , Nota};