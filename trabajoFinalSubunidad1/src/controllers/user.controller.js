//importamos el modelo
import usuarioModel from "../models/user.model.js"

/*
    GET -> me muestra los usuarios
    POST -> me crea usuarios
    PUT -> me modifica USUARIOS
    DELETE -> me elimina usuarios
*/

//prueba inicial
export const getUsuario = async (req, res) => {
    try{
        let usuarios = await usuarioModel.find();
        return res.send(usuarios);
    }catch(error){
        return res.json({ error: "error al mostrar los datos" + error });
    }
}
export const postUsuario = async (req, res) => {
    try {
        let datosUsuario = req.body;
        let nuevoUsuario = await usuarioModel.create(datosUsuario);
        return res.json(nuevoUsuario);
    } catch(error) {
        return res.status(500).json({ error: "Error al crear usuario", message: error.message });
    }
}

export const putUsuario = async (req, res) => {
    try {
        let datosModificar = req.body;
        let idParaModificar = req.params._id;
        await usuarioModel.findByIdAndUpdate(idParaModificar, datosModificar);
        return res.json({ msg: "Actualizado correctamente" });
    } catch(e) {
        return res.json({ error: e });
    }
}
export const deleteUsuario = async (req, res) => {
    try {
        let idParaEliminar = req.params._id
        let usuarioEliminar = await usuarioModel.findByIdAndDelete(idParaEliminar)
        if (usuarioEliminar) {
            return res.json({ msg: "Eliminado Correctamente" })
        } else {
            return res.json({ msg: "No eliminé nada" })
        }

    } catch(e) {
        return res.json({ error: e })
    }
}