/**
 * Un buen caso para usar switch
 * 
 * Queremos escribir un script que, dado un mes del año, nos diga en que trimestre nos encomtramos.
 * 
 * Por ejemplo, si mes = 4, deberíamos mostrar por el terminal "Nos encontramos en el segundo cuatrimestre"  
 * 
 * Explra esta información para averiguar como usar el condicional 'switch'; y cómo se pueden agrupar varios casos: https://javascript.info/switch#grouping-of-case
 * 
 */

let mes = 1;

var ans;

switch(mes){
    case 1:
    case 2:
    case 3:
        ans = "Estamos en el primer cuatrimestre";
        break;
    case 4:
    case 5:
    case 6:
        ans = "Estamos en el segundo cuatrimestre";
        break;
    case 7:
    case 8:
    case 9:
        ans = "Estamos en el tercer cuatrimestre";
        break;
    case 10: 
    case 11:
    case 12: 
        ans = "Estamos en el cuarto cuatrimestre";
        break;
    default:   
        ans = "Error en el mes";
}

console.log(ans);

// Escribir a partir de aquí


