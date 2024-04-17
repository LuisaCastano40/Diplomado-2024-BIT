//Archivo para conexión con base de datos mongo DB

// importamos mongoose según ES6
import mongoose from 'mongoose';

// DB local -> 'mongodb://localhost/nombre_db'


// Creamos la función para realizar concexión a DB
const conexionMongo = async () => {
    // Es una promesa -> fn asíncrona -> manejo de errores con try y catch

    // se utiliza para conectar la aplicación Node.js a una instancia de MongoDB
    await mongoose.connect(process.env.DB_URL, {})
    try {
        console.log('Conexión exitosa');
    } catch (error) {
        console.error('Error de conexión:', error.message);
    }
}

// exportar nuestra función para poderla llamar desde nuestro servidor
export default conexionMongo;