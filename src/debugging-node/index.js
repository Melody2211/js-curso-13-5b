/* Algoritmo de ordenamiento al burbuja O(n^2)*/

const ordenaBurbuja = (lista) => {


    let longitudlista, indexOrder, indexChange, auxChange;
    longitudlista = lista.length;

    console.info(longitudlista); // Mostramos por consola la cantidad de elementos en la lista 

    for (indexOrder = 1; indexOrder < longitudlista; indexOrder++){
        //for anidado.
        for (indexChange = 0; indexChange < (longitudlista - indexOrder); indexChange++) {
            // Intercabiamos los valores si el anterior es mayor al siguiente.
            if (lista[indexChange] > lista[indexChange + 1]) {
                auxChange = lista[indexChange];
                lista[indexChange] = lista[indexChange + 1];
                lista[indexChange + 1] = auxChange;
            }
        }
    }
 
    return lista;
}

let listaDesordenada = [6, 5, 3, 8, 7, 2, 4,];
console. warn(listaDesordenada); // Mostramos, por consola, la lista desordenada

const listaOrdenada = ordenaBurbuja(listaDesordenada);
console.log(listaOrdenada); // Mostramos, por consola, la ya lista da ordenada 