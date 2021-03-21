//MELODY RAMIREZ 13 5B

const saludar = (nombre) => {


    console.log ('Creando etiqueta h1,en el html!');

  // COMENTARIO DEUNA SOLA LINEA .
  // EL CODIGO COMENTADO NO LO LEE EL INTERPRETE DE JS .

  /*
  COMENTARIO DE VARIAS LINEAS.
  USO BASICO DEL DOCUMENTO OBJECT MODEL (DOM)
  PERMITE A JS MODIFICAR EL HTML.
*/
const h1 = DOCUMENT. CREATEElement ('H1');
h1.INNERTEXT = 'HOLA, ${nombre}' ;

DOCUMENT.BODY. APPEND (h1);

}

const USER = "JUANCHO";

saludar(USER);
