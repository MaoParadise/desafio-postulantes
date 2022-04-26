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
