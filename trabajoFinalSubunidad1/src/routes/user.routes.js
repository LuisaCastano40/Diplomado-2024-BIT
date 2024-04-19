// Importación de dependencias
import express from 'express';
import { getUsuario, postUsuario, putUsuario, deleteUsuario } from '../controllers/user.controller.js';

// definimos la variable para nuestras rutas
const usuarioRouter = express.Router();


// Defimimos nuestras rutas

// ruta para mostrar usuarioos
usuarioRouter.get('/obtenerusuario', getUsuario);

// ruta para crear usuarioos
usuarioRouter.post('/crearUsuario', postUsuario);

// ruta para actualizar usuarioos por id
usuarioRouter.put('/actualizarUsuario/:_id', putUsuario);

// ruta para eliminar usuarioos
usuarioRouter.delete('/eliminarUsuario/:_id', deleteUsuario);


// Exportamos las rutas
export default usuarioRouter;