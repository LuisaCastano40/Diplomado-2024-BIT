// 1. IMPORTAMOS dependencias y/o modulos Y CONFIGURAMOS EXPRESS COMO SERVIDOR
//importamos dependencias según sistema de módulos ES6
import express from 'express';
// Importamos path para usar ciertas utilidades a la hora de trabajar con rutas
import path from 'path';

import conexionMongo from './src/config/db.js';

//configuramos express como servidor
const app = express();
// puerto que vamos a usar para escuchar las solicitudes
const port = 3000; 

// configuramos el uso de dotenv -> para usar variables de estado
import dotenv from "dotenv";
dotenv.config();

//  ejecutamos la función de conexión de nuestra base de datos
conexionMongo();

// 2. ESTABLECEMOS LAS RUTAS PARA NUESTRO FRONT

// obtenemos la ruta absoluta de nuestra carpeta public
const publicPath = path.join(process.cwd(), 'public');
// configuramos middleware
// middleware para usar los archivos estáticos dentro de public
app.use(express.static(publicPath));
// middleware para cuando esperas recibir datos en formato JSON
app.use(express.json());




// Ruta para index.html
// manejo de solicitud en una aplicación Node.js
app.get('/', (req, res) => {
    // req -> request - solicitud del cliente
    // res -> res - respuesta por parte del servidor
    // sendFile -> enviamos una ruta como respuesta
  res.sendFile(path.join(publicPath, 'index.html'));
});


// 3. INICIALIZAMOS EL SERVIDOR
app.listen(port, () => {
    console.log(`El servidor está escuchando en http://localhost:${port}`);
  });