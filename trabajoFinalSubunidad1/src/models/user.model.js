// importamos mongoose para poder usar Schema
import mongoose from "mongoose";

const schema = mongoose.Schema;

// Estructuramos cómo van a ser los datos a guardar en nuestra db
const usuarioSchema = new schema({
    nombreCompleto: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    contrasena: {
        type: String,
        required: true
    }
})

// Exportamos el modelo
// mongoose.model():se utiliza para definir o recuperar un modelo de datos en Mongoose. 
// primer argumento -> nombre del modelo (colección de la db) 
// segundo argumento -> es el esquema del modelo.
const usuarioModel = mongoose.model('usuario', usuarioSchema);

export default usuarioModel;