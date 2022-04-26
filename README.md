## END POINTS

### / - Obtiene el Mensaje de Bienvenida de la API
      {
    "title": String,
    "version": "1.0.0",
    "author": "Carlos Pasten Bravo",
    "description": String,
    "message": "to obtain the data from the table of the website of the SII /api/All"
}


### /api/All - GET - Obtiene la nómina registro voluntario de instituciones financieras extranjeras e internacionales
    parametros de salida: 
        {
            "message": String,
            "data" : Array[JSON]
            "state": "success" || "failed"
            
        }
    /*

## Instalacion
###
    $ git clone https://github.com/MaoParadise/desafio-postulantes

###
    $ cd desafio-postulantes
    $ npm install
    $ npm start # Si esta en un ambiente de desarrollo se sugiere usar npm run dev.


### sobre la estructura del proyecto

la lógica se encuentra escrita en la carpeta src, esta divida en la carpeta **/controllers** para manejar los eventos de llamados de la API, la carpeta **/routes** para almacenar las rutas permitas de la API _**cualquier otra ruta que se desee agregar en el futuro tiene que estar aquí**_, la carpeta **utils** para guardar contenido externo e **index.js** ( inicializa, configura y arranca el servidor) 
###
    ./src  
        /controllers
        /routes
        /utils  
        index.js
