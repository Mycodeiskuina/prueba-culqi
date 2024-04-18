# Prueba técnica Culqi

## Primera parte

Se realizó 2 algoritmos, ejercicio1_v1 es una primera versión con mayor complejidad de tiempo, ejercicio1_v2 es una solución más óptima

```ejercicio1_v1.js```: Solución al primer ítem más sencilla y fácil de entender

```ejercicio1_v2.js```: Solución al primer ítem con menor complejidad de tiempo debido al uso optimizado de mapas

## Segunda Parte 

### Requisitos previos
* Docker y Docker Desktop instalados
* Node.js y npm 
* Postman (opcional para hacer solicitudes)

### Estructura del proyecto

En la carpeta principal ```src``` se encuentran los siguientes archivos: 

```index.js```: Archivo principal que inicia la aplicación y configura el servidor.

```controllers/SubstringController.js```: Recibe y maneja las solicitudes GET y POST en la función createSubstring, ademas de agregar elementos a la base de datos

```models/SubstringModel.js```:  Crea modelo llamado Substring de Mongoose para la guardar las posiciones de las subcadenas en MongoDB

```routes/SubstringRoute.js```: Define las rutas /ejercicio1 con la API relacionadas con el ejercicio 1 y vincula la función createSubstring para el método POST y getSubstring para el método GET del controlador.

```utils```: Algoritmos implementados.

## Como ejecutarlo?

1. Clonar el repositorio
```bash
git clone https://github.com/Mycodeiskuina/prueba-culqi.git
```
2. Ejecutar ```npm install``` en la consola para descargar dependencias
```bash
npm install
```
3. Construir e iniciar los contenedores con docker-compose
```bash
docker-compose build
docker-compose up
```

4. Utilizar una herramienta como Postman para realizar una petición POST a http://localhost:5000/api/ejercicio1 con el siguiente body:

```json
{
    "s": "barfoothefoobarman",
    "words": [
        "foo",
        "bar"
    ]
}
```

5. Utilizar una herramienta como Postman para realizar una petición GET a http://localhost:5000/api/ejercicio1 para verificar que los elementos se almacenen correctamente en la base de datos









