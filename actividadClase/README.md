## GUÍA CONCEPTOS BÁSICOS DE JAVASCRIPT


A continuación estaremos desarrollando el paso a paso para conectar mi repositorio local (el código en mi computador), con mi repositorio remoto (mi biblioteca en GitHub )


1. Crear el repositorio en GitHub (remoto)
    * buscamos el boton verde con ícono de libro que dice "nuevo"
    * llenamos el nombre del repositorio, descripción (si quieren) y lo ponemos público
    * click en el boton verde crear repositorio

2. Crear nuestro repositorio local

    * abrimos la consola de git bash desde visual:
        1. ctrl + ñ
        2.  ... -> terminal -> nuevo terminal

    * vamos a escribir los comandos para inicializar nuestro repositorio local y conectarlo con el remoto
        - COMANDOS (DEBEN IR EN ORDEN) holi:
        1. git init -> Inicializar mi repositorio local

            - git status -> memuestra el estado de mis archivos

        2. git add .-> se usa todo para agregar cambios al entorno de preparación

        3. git commit -> nos permite poner un mensaje pero además significa que sus archivos están listos para enviarse al repositorio remoto

        ej: git commit -m "lo que está dentro de las comillas es lo que yo edito"

        (estos sólo se usan la primera vez que creo el repositorio)
        4. git branch -M main -> establecer la rama main
        5. git remote add origin -> me conecta con el remositorio en internet, el remoto
        ej: https://github.com/LuisaCastano40/actividadClase.git
        
        6. git push -u origin main -> me envía los cambios a la rama main en mi github (me sube todo a internet)


        QUEDAMOS EN EL ERROR DE AUTENTICACIÓN - SOLUCIÓN EL MIÉRCOLES



## QUÉ PONER EN EL README PARA MI PROYECTO FINAL

1. Título -> Entrega Final diplomado
2. Descripción general -> me hable de todo el proyecto
3. Autor -> quién los hizo - sus nombres
