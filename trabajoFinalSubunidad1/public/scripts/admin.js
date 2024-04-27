
// Obtener los datos de la base de datos al cargar la página
console.log('hola');


// Función para obtener datos de la base de datos
const mostrarUsuarios = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/obtenerusuario');
    const data = await response.json();
    console.log(data)
    // Llamar a la función para crear filas en la tabla con los datos recibidos
    crearTabla(data);
  } catch (error) {
    console.error('Error al obtener datos:', error);
  }
}


// Función para crear tarjetas con los datos de los productos
function crearTabla(usuarios) {
  const tabla = document.getElementById("miTabla");

  tabla.innerHTML = '';
  usuarios.forEach(usuario => {

    // creamos una fila en la tabla
    tabla.innerHTML += `
          <tr>
            <td>${usuario.nombreCompleto}</td>
            <td>${usuario.correo}</td>
            <td class="acciones">
              <button type="button" class="btn btn-info" id="${usuario._id}" onclick='editarUsuario(event)'>
                <i class="bi bi-pencil-square"></i>
                Editar
              </button>

              <button type="button" class="btn btn-danger" id="${usuario._id}" onclick='eliminarUsuario(event)'>
                <i class="bi bi-trash"></i>
                Eliminar
              </button>
            </td>
          </tr>
          `;

  });
}

mostrarUsuarios();


function eliminarUsuario(event) {
  console.log('eliminar');
  const idUsuarioEliminar = event.target.id;
  console.log(idUsuarioEliminar);

  fetch(`http://localhost:3000/api/eliminarUsuario/${idUsuarioEliminar}`, {
    method: 'DELETE',
  }).then(response => {
    if (!response.ok) {
      throw new Error('Error al eliminar usuario');
    }
    alert('Usuario eliminado correctamente');
    mostrarUsuarios();
  }).catch(error => {
    console.error('Error al eliminar usuario:', error);
  });
}

function editarUsuario(event) {
  console.log('editar');
  const idUsuarioEditar = event.target.id;
  console.log(idUsuarioEditar);
}