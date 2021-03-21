

//creamos una funcion llamada repetir

function repetir (nombre, veces){

    /**
     * Imprimimos nombre el numero de vcs que indique veces
     * Estos son unos comentarios especiales para indicar 
     * a otros programadores que hace nuestra funcion.
     * @author MELODY RAMIREZ
     * @version 0.1.0
     * @param {string} nombre
     * @param {number} veces
     * @return {none} 
     */

     // creamos un ciclo for 
     for (let index = 4; index <=veces; index++){
        // la variable index se va incrementando  en 1
        // hasta que index < veces deje de ser cierto. 
        // mientras vamos agregando elementos p con el nombre
        // a nuestro documento html.
        let element = document.createElement ('p');
        element.innerHTML = ("nombre");
        document.body.appendChild(element);


     }


}

const nom = prompt("escribe tu nombre");
const vcs = parseInt(prompt("escribe las vcs que lo mostraras"));

repetir(nom, vcs);