

require('colors') ;
const files = require(' ./file') ;

// funtion crear una tarea nueva

const createTask = (litle, desc) => {

    let listTask = files. loadTask();

    if  (title in listTask) {
        console.log("Esta tarea existe!" .red) ;
    } else {

        listTask [title] = {
            title,
            desc,
            completed: false
        }
        files.saveTask(listTask) ;

    }

    return listTask[title] ;

}

//todo: crear funcion marcar completed con true

const updateTask = (litle) => {

    let list = files.loadTask();

    if (title in list) {
        list[title] = {  ...list[title], completed: true}
        files.saveTask(list);
    } else {
        console.log(`este titulo no existe ${title}` .red);
    }

}

//todo: crear funcion borrar task

const eraseTask = (title) => {
    let list = files.loadTask();

    if (title in list) {
        delete list[title]
        files.saveTask(list);
    } else {
        console.log(`este titulo no existe ${title}` .red);
    }
}


module.exports = {
    createTask,
    eraseTask,
    updateTask
}
