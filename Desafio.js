/*
** Realizar una función(n) que calcule la secuencia fibonacci de n elementos
*/
const desafio02 = (n) => {
    //precondición para esta función: n no puede ser menor a 2
    let result = [0,1];
    let index = 1;
    while(index <= n){
        result.push(result[index] + result[index - 1]);
        index++;
    }
  return result;
}
desafio02(5);