/* const nombre = prompt('Ingresa tu nombre');

alert(`Hola ${nombre}, bienvenido a la peluqueria Liverpool`);

let corte= prompt('¿Qué tipo de corte queres? (Para corte masculino: 1, para corte femenino: 2)');

let precio = 0;

do{

    if(corte == 1){

        precio = 600;

        alert(`El precio total del corte es de ${precio}`);

    } else if(corte == 2){

        precio = 800;

        alert(`El precio total del corte es de ${precio}`);

    } else {

        alert('El corte no existe');

        corte = prompt('¿Qué tipo de corte desea? (Para corte masculino: 1, para corte femenino: 2)');

    }

} while(corte != 1 && corte != 2);

let pago = 0;

do {

    pago = prompt('Con cuanto vas a pagar ?');

    if(pago < precio){

        alert('El pago es insuficiente');

        pago = parseInt(prompt('Con cuanto vas a pagar ?'));

    } else {

        alert(`Tu pago es de ${pago}, el cambio es de ${pago - precio}, gracias por cortarte el pelo con Liverpool`);

    }

} while (pago < precio); */

const array = [
    {   id: 1,
        name: 'mouse',
        price: 20,
    },
    {   id: 2,
        name: 'teclado',
        price: 15,
    },
    {   id: 3,
        name: 'monitor',
        price: 40,
    },
    {   id: 4,
        name: 'procesador',
        price: 45,
    }
]

let borrar = prompt ('ingresa el ID del producto que deseas borrar 1/2/3/4')
const findProduct = (array.find(item => item.id == borrar))
const productIndex = array.indexOf(findProduct)
array.splice(productIndex, 1)

console.log(array)