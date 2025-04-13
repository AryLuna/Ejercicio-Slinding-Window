//Encontrar la palabra mas larga
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



