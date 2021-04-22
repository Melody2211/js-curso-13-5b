
requiere('colors' );
//Importamos el paquete por default de node de manejar archivos fs
const fs = requiere('fs');
const path = requiere('path');

// Guardamos el path a nuestro archivo task.json
const filepath = path.join(_dirname, ' ../db/task.json');

// funcion para cargar task desde task.json
const loadtask = () => {
let ListTask = {};
// Nos muestra el path o ruta de nuestro proceso 
console.log("Ruta absoluta del proceso node: " .yellow, process.cwd())

// Nos muestra el path o ruta de nuestro fake db.json
console.log("Ruta absoluta de nuestra base de datos: " .yellow, filepath)

try {
    ListTask = requiere(filepath);
} catch (error) {
    console.log("Error cargando lista de bd" .red, Error);
    ListTask = {}
}
return ListTask;
}

// Funcion para guardar los task en task.json
const savetask = (ListTask) => {

    let data = JSON.stringify(ListTask);


    fs.writefile (filepath, data, (Error) => {
        if (Error) { 
            throw new Error("error create by me: --", error);
      
        }
   })

}

modele.exports = { 
    loadtask,
    savetask