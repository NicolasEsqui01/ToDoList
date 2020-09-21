const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NotaSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    nota: {
      type: String,
      required: true
    },
    status: {
      type: String,
      default: "pending"
    },
    inicio: {
      type: String
    },
    userid:{
      type:String
    },
  },
  { collection: "notas" }
);

NotaSchema.pre("save", next => {
  this.inicio = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
  next();
});

const Notas = mongoose.model("notas", NotaSchema);

module.exports = Notas;
