

const description = {
    demand: true, // Opcion obligatoria
    alias: 'd' , // -
    desc: ' descripcion de la tarea a realizar'
}

const title = {
    demand: true, // Opcion obligatoria
    alias: 't' , // -
    desc: ' titulo de la tarea a realizar - unico'
}

const completed = {
    alias: 'c' ,
    default: true, // por default su valor es true
    desc: ' marcar como completada la tarea'
}
const erased = {
    alias: 'e' ,
    default: true, // por default su valor es true
    desc: ' borrar la tarea'
}

// Esta bandera sera obligatoria para el comando create.
const optionsCreate = {
    description,
    title
}

const optionsUpdate = {
    title,
    completed
}
const OptionsErase = {
    title,
    erased
}


modele.exports = {
    optionsCreate,
    optionsUpdate,
    OptionsErase
}
