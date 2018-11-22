const argv = require('./config/yargs').argv;
const porHacer = require('./to-do/to-do');
const colors = require('colors/safe');


let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        console.log(colors.green('========== LISTADO DE LAS TAREAS =========='));
        for (let tarea of listado) {
            console.log(`${tarea.descripcion} ---->  ${tarea.completado}`);
        }
        console.log(colors.green('===========================================\n'));
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('comando no reconocido');
}