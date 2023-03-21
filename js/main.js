/*construir un menú en una funciónalert que gestione las siguientes
opciones de menú referentes al manejo de los arrays, objetos, funciones
y otras operaciones en JavaScript entre dichos temas. */

let opcion;
let objeto;
let array;
let arrObjeto = [];
let copia;

do{
    alert('MENU \n 1. Lectura de datos \n 2. Crear Objeto \n 3. Mostrar Objeto \n 4. Crear Array \n 5. Mostrar Array \n 6. Elimine primer elemento del Array \n 7. Elimine ultimo elemento del Array \n 8. Eliminar cualquier elemento del Array \n 9. Agregar elemento al comienzo del Array \n 10. Agrega elemento al final del Array \n 11. Crear Array con objetos \n 12. Iterra Array con objetos con FOR \n 13. Iterra Array con objetos con FOREACH \n 14. Iterra Array con objetos con map y crear copia \n 15. proceso personal \n 0. Salir');
    opcion = Number(prompt('Digite la opccion a Ejecutar'));
    switch (opcion){
        case 0:
            console.log('SALIO DEL PROGRAMA')
            break;
        case 1:
            console.log('lECTURA DE DATOS');
            break;
        case 2:
            objeto = {};
            break;
        case 3:
            console.log(objeto);
            break;
        case 4:
            array = [];
            break;
        case 5:
            console.log(array);
            break;
        case 6:
            array.shift();
            break;
        case 7:
            array.pop();
            break;
        case 8:
            let num = Number(prompt('Ingresa el valor a eliminar'))
            array.splice(num, 1);
            break;
        case 9:
            let elemento = prompt('Ingresa el elemento nuevo del array')
            array.unshift(elemento);
            break;
        case 10:
            let elemento1 = prompt('Ingresa el elemento nuevo del array')
            array.push(elemento1);
            break;
        case 11:
            let llave = prompt('Ingrese la llave del objeto')
            let value = prompt('Ingrese el valor de la llave')
            let objetoArr = {};
            objetoArr[llave] = value;
            arrObjeto.push(objetoArr);
            break;
        case 12:
            for (let i=0; i<arrObjeto.length; i++){
                console.log(arrObjeto[i]);
            };
            break;
        case 13:
            arrObjeto.forEach(arrObj => {
                console.log(arrObj);
            });
            break;
        case 14:
            copia = arrObjeto.map(variable=>console.log(variable))
            break;
        case 15:
            console.log('Proceso Personal');
            break;
        default:
            console.log('Opccion no valida');
            break;
    }
} while (opcion != 0);

