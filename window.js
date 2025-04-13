//Encontrar la palabra mas larga de un array
function palabraMasLarga(arr) {
    let inicio = 0;
    let maxLength = 0;
    let palabra = "";

    for (let fin = 0; fin < arr.length; fin++) {
        const actualPalabra = arr.slice(fin, fin + 1)[0].nombre;

        if (actualPalabra.length > maxLength) {
            maxLength = actualPalabra.length;
            palabra = actualPalabra;
        }
    }

    return { palabra, maxLength };
}

const array = [
    { nombre: "Laura" },
    { nombre: "Penelope" },
    { nombre: "Estefania" },
    { nombre: "Ana" }
];

console.log(palabraMasLarga(array));

//Encontrar palabra mas larga en un parrafo de texto

function palabraMasLarga(parrafo) {
    const palabras = parrafo.split(' ');

    let maxLength = 0;
    let palabra = "";

    for (let fin = 0; fin < palabras.length; fin++) {
        const actualPalabra = palabras.slice(fin, fin + 1)[0];

        if (actualPalabra.length > maxLength) {
            maxLength = actualPalabra.length;
            palabra = actualPalabra;
        }
    }

    return { palabra, maxLength };
}

const parrafo = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

console.log(palabraMasLarga(parrafo));




