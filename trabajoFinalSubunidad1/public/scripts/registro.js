
console.log('hola');

const registrarUsuario = async () => {

    // 1.  Obtener los datos del formulario
    const nombreCompleto = document.getElementById('nombreCompleto').value;
    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;

    console.log(nombreCompleto, correo, contrasena);

    // 2. Crear objeto con los datos del usuario
    const datosUsuario = {
        nombreCompleto,
        correo,
        contrasena
    };

    console.log(datosUsuario);


    //3. Hacer petición POST al servidor

    try {
        const respuesta = await fetch('http://localhost:3000/api/crearUsuario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datosUsuario)
        });

        // recibimos la respuesta para confirmar creación de nuestro usuario

        const nuevoUsuario = await respuesta.json();
        console.log('Usuario creado:', nuevoUsuario);

    //4. Le avisamos al usuario y redireccionamos
        if(nuevoUsuario){
            alert('Registro Exitoso');
            window.location.href = './ingreso.html';
        }else{
            alert('Hubo un error de registro, inténtalo nuevamente');
        }

    } catch (error) {
        console.error('Error al registrar usuario:', error);
    }

}




