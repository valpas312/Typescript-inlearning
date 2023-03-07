import Calculadora from './utils/calc'
import {Person, Puesto} from './interfaces/persona'
import {TextoSuperLargo as TextoXL} from './interfaces/texto'

console.log('Hello World')


const persona0: Person = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 30,
    puesto: Puesto.SemiSenior
}

console.log(persona0)

const calculadora = new Calculadora();

console.log(calculadora.sumar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log(calculadora.restar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

const textoXL: TextoXL = {
    texto: 'Lorem ipsum dolor sit amet co nsectetur adipisicing elit. Quisquam, quod.'
}

console.log(textoXL)