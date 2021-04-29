#!/usr/bin/env node

// Importamos colors para darle color a nuestro console.log() en terminal
requiere('colors');

const { argv, task } = requiere(' ./tools');


console.log("argumentos obtenidos por argv: " .yellow, argv);

const command = argv._[0];

switch (command) {

    case 'create' :
        //comando create ejecutando creo una nueva nota en mi tasks,md
        let task = tasks.createTask(argv.title, argv.description)
        console.log("tarea created: ".blue, task)
        break;

    case 'update':
        // comando create ejecutando creo una nueva nota en mi tasks.md
        tasks.updateTask(argv.title);
        break;

    case 'delete':
        // comando create ejecutando creo una nueva nota en mi tasks.md
        tasks.eraseTask(argv.title);
        break;

    default:
        const msg = (!!argv._[0]) ?
        `no existe este comando: ${argv._[0]}`
        : 'favor colocar un comando [create, delete, update, read]' ;

        console.log(msg.red);

        break;
}
