const obj = {};
const { Nota, User } = require("../models");

// CREO UNA NOTA Y LE ASIGNO EL USUARIO QUE LA CREO
obj.createNote = async (req, res, next) => {
  try {
    let newNota = await Nota.create(req.body);
    let user = await User.findById({ _id: req.user._id });
    newNota.userid = user._id;
    await newNota.save();
    res.sendStatus(201);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// BUSCO LAS NOTAS DEL USUARIO

obj.NotasUser = async (req, res, next) => {
  try {
    const nota = await Nota.find({ userid: req.user._id }).exec();
    res.status(200).send(nota);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// DELETE DE NOTA

obj.DeleteNotas = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Nota.deleteOne({ _id: id, userid: req.user._id });
    res.sendStatus(200);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// ACTUALIZAR UN NOTA

obj.Actualizar = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updateNota = await Nota.updateOne(
      { userid: req.user._id, _id: id },
      req.body
    );
    res.status(200).send(updateNota);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

obj.FinalizarNota = async (req, res, next) => {
  try {
    const Finalizar = await Nota.updateOne(
      { _id: req.params.id, userid: req.user._id },
      { status: "complete" }
    );
    res.status(200).send(Finalizar);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

obj.Search = async (req, res, next) => {
  try {
    const busqueda = await Nota.find({
      userid: req.user._id,
      title: {
        $regex: req.query.name
      }
    });
    res.status(200).send(busqueda);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

obj.getNotaId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const notaId = await Nota.findById({ _id: id });
    res.status(200).json(notaId);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = obj;
