/*
** Calcular la suma de todos los números pares que se encuentren entre el 10 y el 50
*/
const desafio01 = (inicio, fin) => {
    let inicio = inicio;
    let fin = fin;
    let result = 0;
    while(inicio <= fin){
        if(inicio % 2 == 0){
            result += inicio;
        }
        inicio++;
    }
}
desafio01(10, 50);