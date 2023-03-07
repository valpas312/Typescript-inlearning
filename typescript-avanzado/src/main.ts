import Calculadora from './utils/calc'

console.log('Hello World')

enum Puesto{
    Junior = 'Junior',
    SemiSenior = 'SemiSenior',
    Senior = 'Senior'
}

interface Person {
    nombre: string
    apellido: string
    edad: number
    puesto: Puesto
}

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