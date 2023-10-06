import colors from 'colors';
import inquirer  from "inquirer";

const preguntas = [
    { 
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
            { value: '1', name: `${ '1.'.green } Crear Tarea` },
            { value: '2', name: `${ '2.'.green } Listar Tareas` },
            { value: '3', name: `${ '3.'.green } Listar Tareas Completadas` },
            { value: '4', name: `${ '4.'.green } Listar Tareas Pendientes` },
            { value: '5', name: `${ '5.'.green } Completar tarea(s)` },
            { value: '6', name: `${ '6.'.green } Borrar tarea` },
            { value: '0', name: `${ '0.'.green } Salir` },
        ]
    }
];

const inquirerMenu = async() => {

    console.clear();
    console.log('======================='.green);
    console.log(' Seleccione una opción'.white);
    console.log('=======================\n'.green);

    const prompt = inquirer.createPromptModule();
    const { opcion } = await prompt(preguntas);

    return opcion;
};

const pausa = async() => {
    console.log('\n');

    const prompt = inquirer.createPromptModule();
    await prompt([{
        'type': 'input',
        'name': 'enter',
        'message': `Presione ${ 'ENTER'.green } para continuar`
    }]);
}

const leerInput = async ( message ) => {
    const question = [
        {
            'type'    : 'input',
            'name'    : 'desc',
            message,
            validate( value ) {
                if( value.length === 0) {
                    return 'Por favor ingrese un valor';
                }

                return true;
            }
        }
    ];

    const algo = inquirer.createPromptModule();
    const { desc } = await algo(question);

    return desc;
}

const listadoTareasBorrar = async( tareas = [] ) => {
    const choices = tareas.map( (tarea, i) => {
        const idx = `${ i + 1 }.`.green
        return {
            value: tarea.id,
            name: `${ idx } ${ tarea.desc }`
        };
    });

    choices.unshift({ value: '0', name: `${ '0.'.green } Cancelar` });

    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }
    ];
    const prompt = inquirer.createPromptModule();
    const { id } = await prompt(preguntas);

    return id;
}

const confirmar = async( message ) => {
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];

    const prompt = inquirer.createPromptModule();
    const { ok } = await prompt( question );

    return ok;
}

const mostrarListadoChecklist = async( tareas = [] ) => {
    const choices = tareas.map( (tarea, i) => {

        const idx = `${ i + 1 }.`.green

        return {
            value: tarea.id,
            name: `${ idx } ${ tarea.desc }`,
            checked: ( tarea.completadoEn ) ? true : false
        };
    });

    const pregunta = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Seleccione',
            choices
        }
    ];
    const prompt = inquirer.createPromptModule();
    const { ids } = await prompt(pregunta);

    return ids;
}
export  {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoChecklist
};