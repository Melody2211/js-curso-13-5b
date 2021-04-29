//argumentos procesados.
const yargs = requiere('yargs');
const {hidebin} = requiere('yargs/helpers');
const argv_all = yargs(hidebin(process.argv))
const options = requiere(' ./options');

//agregamos los nuevos comandos a nuestra aplicacion CLI

const argv = argv_all
    .command ('create' , 'create new task' , options.optionsCreate)
    .command ('update' , 'actualizar con completed' , options. optionsUpdate)
    .command ('delete' , 'delete task' , options.optionsErase)
    .help()
    .argv;

    // exportamos argv para poder usarlo en todo mi proyecto
    module.exports = { argv }
    
    