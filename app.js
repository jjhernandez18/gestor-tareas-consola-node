import { Tareas } from './models/tareas.js';
import { guardarDB, leerDB } from './helpers/guardarArchivo.js';
import { 
        inquirerMenu, 
        pausa, 
        leerInput, 
        listadoTareasBorrar, 
        confirmar, 
        mostrarListadoChecklist 
    } from "./helpers/inquirer.js";


console.clear();

const main = async() => {

    let opt = '';
    const tareas = new Tareas();
    const tareasDB = leerDB();

    if( tareasDB ) {
        tareas.cargarTareasDB( tareasDB );
    }

    do {
        // Imprime las opciones de menú y retorna la opción seleccionada
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                const desc = await leerInput('Descripción: ');
                tareas.crearTarea( desc );
                break;

            case '2':
                tareas.listadoCompleto();
                break;

            case '3':
                tareas.listarPendientesCompletadas();
                break;

            case '4':
                tareas.listarPendientesCompletadas(false);
                break;

            case '5':
                const ids = await mostrarListadoChecklist( tareas.listadoArr );
                tareas.changeEstadoTarea( ids );
                break;

            case '6':
                const id = await listadoTareasBorrar( tareas.listadoArr );
                if( id !== '0') {
                    const ok = await confirmar('¿Está seguro?');
                    if ( ok ) {
                        tareas.borrarTarea( id );
                        console.log('\nTarea borrada.'.green);
                    }
                }
                break;

            default:
                break;
        }

        guardarDB( tareas.listadoArr );

        await pausa();
    } while ( opt !== '0' );
}


main();