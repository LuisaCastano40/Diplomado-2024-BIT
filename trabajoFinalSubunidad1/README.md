<!-- Centrar el título -->
<h1 align="center">Guía para realizar Entrega Final Diplomado en Desarrollo web 2024</h1>

<!-- Subtítulo -->
<p align="center"><em>Estudiantes de psicología - Guía paso a paso para <b>Entrega 4 y Entrega 6</b></em></p>

<!-- Separador -->
<hr>

<!-- Tabla de Contenido -->
<h2 align="center">Tabla de Contenido</h2>

1. [**Paso 1: Crear repositorio Trabajo Final**](#crear-repositorio-trabajo-final) 🌐
2. [**Paso 2: Inicializar mi proyecto con Node.js**](#inicializar-proyecto-con-nodejs) 🛠️
3. [**Paso 3: Descargar dependencias y extensiones**](#descargar-dependencias-y-extensiones) ⚙️
4. [**Paso 4: Estructura de carpetas de nuestro proyecto**](#estructura-de-carpetas-de-nuestro-proyecto) 📡
5. [**Paso 5: Montar el servidor con express**](#montar-el-servidor-con-express) 💻
6. [**Paso 6: Creación y conexión con base de datos Mongo DB Atlas**](#creacion-y-conexion-con-base-de-datos-mongo-db-atlas) 🔌
7. [**Paso 7: Creación Modelos (Models)**](#creacion-models) 📋
8. [**Paso 8: Creación Controladores (Controllers)**](#creacion-controllers) 🎮
9. [**Paso 9: Creación Rutas (Routes)**](#creacion-routes) 🛣️
10. [**Paso 10: Pruebas con REST Client**](#pruebas-con-rest-client) ⚙️
11. [**Paso 11: Crear ingreso.html, registro.html y admin.html**](#creacion-paginas-html) 🖥️
12. [**Paso 12: Verificar funcionamiento del sitio web**](#verificar-funcionamiento-del-sitio-web) ✅


<!-- Separador -->
<hr>

<!-- Contenido de cada sección -->


## Paso 1: Crear repositorio Trabajo Final
<p>Utilizaremos el conocimiento de lo aprendido en clases anteriores, crearán un repositorio en su perfil de GitHub llamado **Trabajo-Final**, y deben seguir el paso a paso para vincular el repositorio remoto en GitHub con su repositorio local (la carpeta en la que tienen su proyecto)</p>


### Material Recomendado 📚🎥

- [Clase de git y GitHub](https://www.youtube.com/watch?v=xIyOLgjVebo&list=PLpD_vYWjZt10P3jWpg2O_NfwnDiDEselo&index=9)🎥 
- [Clase donde hacemos el paso a paso para entraga 4 (...Próximamente)](#) 🎥

---

## Paso 2: Inicializar Proyecto con Node.js
<p><b>Ya se descargó e instaló node.js, ahora haremos paso a paso la inicialización del proyecto<p>


### Paso a paso 📖

1. **Abrimos la consola en Visual Studio Code**
2. **Escribimos el comando:**
   - npm init
   - nombre del proyecto (dejamos el sugerido) - click Enter.
   - versión (dejamos el sugerido) - click Enter.
   - descripción (escribimos breve descripción del proyecto) - click Enter.
   - punto de entrada (escribir app.js) - click Enter
   - comando de prueba (no escribimos nada) - click Enter
   - repositorio de git (no escribimos nada) - click Enter
   - palabras clave (no escribimos nada) - click Enter
   - autor (cada uno escribe su nombre) - click Enter
   - licencia (no escribimos nada) - click Enter
   - Escribir **yes** para finalizar la inicialización

3. **Verificar la creación de un archivo llamado package.json**
4. **Hacer las modificaciones necesarias en el package.json**
   - Agregar:<br>
            "type": "module",
            "scripts": {
            "dev": "nodemon app.js",
            "start": "node app.js",
            },


### Material Recomendado 📚🎥

- [Clase donde hacemos el paso a paso para entraga 4 (...Próximamente)](#) 🎥

---

## Paso 3: Descargar dependencias y extensiones
<p><b>Ahora, debemos descargar los elementos que permitirán que nuestro proyecto funcione adecuadamente</p>


### Paso a paso 📖

1. **Lista de extensiones de Visual Studio Code a descargar**
   - [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)
2. **Descargar dependencias de Node.js**
   - Express -> Para nuestro servidor
   - Mongoose -> Para conectar con la base de datos
   - nodemon -> Facilitar la ejecución del proyecto
   - Dotenv -> Manejo de variables de estado
   - **Escribir en consola lo siguiente para instalarlo**
   - npm i express mongoose nodemon dotenv


### Material Recomendado 📚🎥

- [Clase donde hacemos el paso a paso para entraga 4 (...Próximamente)](#) 🎥
---

## Paso 4: Estructura de carpetas de nuestro proyecto
<p>Deben estructurar su proyecto con la siguiente organización de carpetas</p>
<br>

   - trabajoFinal/
   - ├── node_modules/
   - ├── public/
   - │   ├── styles/
   - │   │   └── styles.css (todos sus archivos css)
   - │   ├── scripts/
   - │   │   └── script.js (todos sus archivos JavaScript)
   - │   ├── assets/
   - │   │   └── logo.png (todas sus imágenes, videos, contenido audio-visual)
   - │   ├── index.html
   - │   ├── pagina2.html (todas las páginas que tengan)
   - │   ├── ingreso.html
   - │   ├── admin.html
   - │   └── registro.html
   - ├── src/
   - │   ├── config/
   - │   │   └── db.js
   - │   ├── controllers/
   - │   │   └── user.controller.js
   - │   ├── models/
   - │   │   └── user.model.js
   - │   └── routes/
   - │       └── user.routes.js
   - ├── app.js
   - ├── .gitignore
   - ├── .env
   - ├── package-lock.json
   - ├── package.json
   - ├── README.md
   - └── test.http

<br>

### Material Recomendado 📚🎥

- [Clase donde hacemos el paso a paso para entraga 4 (...Próximamente)](#) 🎥

## Paso 5: Montar el servidor con express

## Paso 6: Creación y conexión con base de datos Mongo DB Atlas

## Paso 7: Creación Modelos (Models)

## Paso 8: Creación Controladores (Controllers)

## Paso 9: Creación Rutas (Routes)

## Paso 10: Pruebas con REST Client

## Paso 11: Crear ingreso.html, registro.html y admin.html

## Paso 12: Verificar funcionamiento del sitio web

<!-- Separador -->
<hr>

<!-- Subtítulo de Autor -->
<h2 align="center">Autor</h2>

Proyecto y preparación de la clase realizado por: 
[Luisa Fernanda Castaño Vanegas](https://www.linkedin.com/in/luisacastanovanegas/). © 2023.
<br>

<!-- Mensaje de Estrellita -->
<p>Si te gustó el contenido del repositorio, ¡apóyanos dando una ⭐ al proyecto!</p>