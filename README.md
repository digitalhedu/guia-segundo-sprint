# ***Guia para el Sprint 2***
___

+ Iniciar el proyecto
    1.  Crear una carpeta website en el repositorio
    2.  Dentro de esa carpeta crear las siguientes:
        + Public o dist
            + assets => ***Aquí nuestras imagenes***
            + css => ***Aquí van nuestros css***
            + js => **Aquí nuestros scripts del frontend**
        + Source o src
            ### Obligatorios
            ___
            + controllers => ***Aquí nuestros controladores***
            + routes => ***Aquí nuestras rutas***
            + views => ***Aquí nuestros HTML***
            ___
            ### Opcionales
            ___
            + data o database => ***Aquí los JSON***
            + models => ***Aquí funciones con los JSON***
            + middlewares => ***Aquí funciones entre las rutas y los controladores***
            ___
___
+   Inicializar el proyecto con ```npm init -y``` ***En la carpeta website***
___
+   Instalar la despendencias ***En la carpeta website que esta el package.json***:
    1.   Express => ```npm i express```
    2.   Nodemon => ```npm i -D nodemon```
___
+   Configurar la seccion de scripts ***dentro del package.json***:
    1. ``"start":"node src/index.js``
    2. ``"test": "nodemon src/index.js``
___
+   Crear los siguientes archivos
    1.  ``src/index.js`` => Donde empieza nuestro servidor.
    2.  ``routes/web.js`` => Donde definiremos las rutas de nuestro proyecto.
    3.  ``controllers/webController.js`` => Donde definiremos las funciones de las rutas anteriores.
    4.  ``views/index.html`` => Donde empieza nuestra aplicación.
    5.  ``public/css/master.css`` => Donde van nuestros estilos. Ojo ver tema [@import - w3school](https://www.w3schools.com/cssref/pr_import_rule.asp) / [@import - MDN](https://developer.mozilla.org/es/docs/Web/CSS/@import)
    6. ``website/.gitignore`` => Dentro escibimos la carpeta ***``node_modules``***
___
+   # ***Cosas a tener en cuenta*** 
    +   ### ***- Recuerda que las carpeta que no tengan contenido git no las va a registrar -***
    +   ### ***- Puedes descargar los archivos de botstrap y guardarlos en la carpeta public -***
        ___
        
        +   [Bootrap - CSS](https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.css)
            ___

        +   [Bootrap - JS](https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.js)
            ___

        +   [Jquery - JS](https://code.jquery.com/jquery-3.4.1.slim.js)
            ___

        +   [PopperJS - JS](https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.js)
            ___
        ___
    +   ### ***- Es buena cosa mantener un orden, modularizar lo más posible -***
    +   ### ***- Comentar el codigo, para tus compañeros -***
    +   ### ***- Tener un registro de las tareas y mantener comunicación -***

# ***- Gracias por leer hasta acá -***
