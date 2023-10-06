import { Tarea } from "./tarea.js";


class Tareas {

    _listado = {};

    get listadoArr() {
        const listado = [];
        Object.keys(this._listado).forEach( key => {
            const tarea = this._listado[key];
            listado.push( tarea );
        });

        return listado;
    }

    constructor() {
        this._listado = {};
    }

    borrarTarea( id = '' ) {
        if( this._listado[id] ) {
            delete this._listado[id];
        }
    }

    cargarTareasDB( tareas = [] ) {
        tareas.forEach( tarea => {
            this._listado[tarea.id] = tarea;
        });
    }

    crearTarea( desc = '' ) {
        const tarea = new Tarea( desc );
        this._listado[tarea.id] = tarea;
    }

    listadoCompleto(listado = this.listadoArr) {
        console.log();
        listado.forEach( (tarea, index) => {
            const { desc, completadoEn } = tarea;

            const idx = `${ index + 1 }.`.green;
            const estado = completadoEn ? 'Completada'.green : 'Pendiente'.red;

            console.log(`${ idx } ${ desc } :: ${ estado }`);
        });
    }

    listarPendientesCompletadas( completadas = true ) {
        this.listadoCompleto(this.listadoArr.filter( tarea => completadas ? tarea.completadoEn : !tarea.completadoEn ));
    }

    changeEstadoTarea( ids = [] ) {
        ids.forEach( id => {
            const tarea = this._listado[id];

            if( !tarea.completadoEn ) {
                tarea.completadoEn = new Date().toISOString;
            }
            console.log(tarea);
        });

        this.listadoArr.forEach( ({ id }) => {
            if( !ids.includes( id )) {
                this._listado[id].completadoEn = null;
            }
        });
    }

}

export { Tareas };