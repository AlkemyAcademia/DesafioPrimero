/*
** Realizar una función(string) que capitalice la primera letra de cada palabra en una cadena de texto.
*/
const desafio03 = (texto) => {
    return texto.split(" ").map((palabra) => palabra.charAt(0).toUpperCase() + palabra.slice(1)).join(" ");
}
desafio03("capitalizando palabras pero solo la primer letra"); 

