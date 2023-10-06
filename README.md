## Introducción

El objetivo de este proyecto es crear una aplicación de consola haciendo uso de Nodejs para 
la gestión de tareas por hacer en donde el usuario puede hacer uso de las siguientes opciones:
```
  1. Crear Tarea
  2. Listar Tareas
  3. Listar Tareas Completadas
  4. Listar Tareas Pendientes
  5. Completar tarea(s)
  6. Borrar tarea
```

Para el manejo de la información de las tareas se realiza el almacenamiento tanto en memoria (o en ejecución) como tambien
en un archivo json que simula el guardado de la información en una base de datos para así tener la información persistente al
abrir nuevamente la aplicación.

En este proyecto se usaron las siguientes librerías de npm:

* [inquirer](https://www.npmjs.com/package/inquirer)
* [colors](https://www.npmjs.com/package/colors)
* [uuid](https://www.npmjs.com/package/uuid)

## Instalación
1. Ejecutar el siguiente comando en la raiz del proyecto
```
    npm install
```

2. Ejecutar el siguiente comando para iniciar el gestor de tareas
```
    node app
```


#### Muchas gracias por visitar mi proyecto!!