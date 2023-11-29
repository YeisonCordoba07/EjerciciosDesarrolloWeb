/* 
1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
*/

/* __ 2 __ */
function recortar(cadena, numero){
    let cadenaRecortada = "";
    for(let i = 0; i < numero; i++){
        cadenaRecortada = cadenaRecortada + cadena[i];
    }
    return cadenaRecortada;
}

//console.log(recortar("Hola esto es una cadena", 6));


/* __ 3 __ */
function separar(cadena, separador){
    return cadena.split(separador);
}
//console.log(separar("hola,esto,es una", ","));


/* __ 4 __ */
function repetirTexto(cadena, numero){
    let textoRepetido = "";
    for (let index = 0; index < numero; index++) {
        textoRepetido += cadena + ' ';    
    }
    return textoRepetido;
}

//console.log(repetirTexto("Hola esto es", 4));

/* 
5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5. 
*/


/* __ 5 __ */

function revertirCadena(cadena){
    let cadenaInvertida = "";
    for (let i = cadena.length -1; i >= 0 ; i--) {
        cadenaInvertida += cadena[i];
    }
    return cadenaInvertida;
}
//console.log(revertirCadena("Hola esta eS"));

/* __ 6 __ */

function contarPalabraRepetida(cadena, palabra){

    var contador = 0;
    for (let i = 0; i <= cadena.length; i++) {

        let continuar = cadena.indexOf(palabra, i);
        if(continuar !== -1){
            contador += 1;
            i = cadena.indexOf(palabra, i);
            
        }else{
            return contador;
        }
    }
}

//console.log(contarPalabraRepetida("Hola este esteeste este este", "este"));

/* __ 7 __ */
function esPalindromo(palabra){
    let palabraInvertida = revertirCadena(palabra);
    if(palabra === palabraInvertida){
        return true;
    }
    return false;
}
//console.log(esPalindromo("hanah"));

/* __ 8 __ */
function eliminarPalabras(cadena, palabrasAEliminar){
    return cadena.replaceAll(palabrasAEliminar, "");
}
//console.log(eliminarPalabras("Hola esta es una cadena de cadena", "cadena"));

/*22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].


27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western*/


function distributeGifts(packOfGifts, reindeers) {
  let sizePackOfGifts = packOfGifts.reduce(function(accumulator, currentValue){

    return accumulator + currentValue.length;
  },0);

  let sizeReindeers = reindeers.reduce(function(accumulator, currentValue){
    return accumulator + currentValue.length;
  },0);
  
  let numbersOfPacks = Math.trunc((sizeReindeers*2)/ sizePackOfGifts );

  console.log(`El numero de regalos que puede llevar es ${numbersOfPacks}`);
  return numbersOfPacks;
}


const packOfGifts = ["book", "doll", "ball"];
const reindeers = ["dasher"];

// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

distributeGifts(packOfGifts, reindeers); // 2
