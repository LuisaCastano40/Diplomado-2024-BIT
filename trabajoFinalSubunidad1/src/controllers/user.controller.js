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
    return res.send('Funciona la petición GET')
}
export const postUsuario = async (req, res) => {
    return res.send('Funciona la petición POST')
}
export const putUsuario = async (req, res) => {
    return res.send('Funciona la petición PUT')
}
export const deleteUsuario = async (req, res) => {
    return res.send('Funciona la petición DELETE')
}