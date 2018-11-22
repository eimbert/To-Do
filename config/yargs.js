const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Crea una nueva tarea'
};
const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como realizada una tarea'
};

const argv = require('yargs')
    .command('crear', 'Crea una tareas nueva', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Elimina un elemnto de la lista', {
        descripcion
    })
    .help()
    .argv;

module.exports.argv = argv;