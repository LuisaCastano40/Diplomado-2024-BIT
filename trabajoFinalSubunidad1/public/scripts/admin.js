document.addEventListener("DOMContentLoaded", function () {

    // Obtener los datos de la base de datos al cargar la página
    console.log('hola');
    fetchData();

    // Función para obtener datos de la base de datos
    async function fetchData() {
        try {
          const response = await fetch('http://localhost:3000/api/obtenerusuario');
          const data = await response.json();
          console.log(data)
          // Llamar a la función para crear filas en la tabla con los datos recibidos
          createTable(data);
        } catch (error) {
          console.error('Error al obtener datos:', error);
        }
      }


      // Función para crear tarjetas con los datos de los productos
    function createTable(usuarios) {

        
        const tabla = document.getElementById("miTabla");
    
        tabla.innerHTML = '';
        usuarios.forEach(usuario => {
          
          // creamos una fila en la tabla
          tabla.innerHTML += `
          <tr>
            <td>${usuario.nombreCompleto}</td>
            <td>${usuario.correo}</td>
            <td class="acciones">
              <button type="button" class="btn btn-info" id="editar">
                <i class="bi bi-pencil-square"></i>
                Editar
              </button>

              <button type="button" class="btn btn-danger" id="eliminar">
                <i class="bi bi-trash"></i>
                Eliminar
              </button>
            </td>
          </tr>
          `;
    
        });
      }

});
