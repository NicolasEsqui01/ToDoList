const User = require('./user');
const Nota = require('./nota');

User.belongsToMany(Nota , {through : 'notas_users'})

module.exports = {User , Nota};