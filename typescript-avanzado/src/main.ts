import Calculadora from './utils/calc'
import { Person, Puesto } from './interfaces/persona'
import { TextoSuperLargo as TextoXL } from './interfaces/texto'
import { lista } from './assets/lista'
import secureTry from './utils/generatos'
import Dinamicos from './interfaces/dinamicos'
import DinamicosGenericos from './interfaces/dinamicosGenericos'

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

lista()

console.log(secureTry.next().value)
console.log(secureTry.next().value)
console.log(secureTry.next().value)
console.log(secureTry.next().value)

const dinamicos: Dinamicos = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 30,
    puesto: 'SemiSenior',
    hijos: {
        nombre: 'Juan',
        apellido: 'Perez',
        edad: 30,
        puesto: 'SemiSenior',
    }
}

console.log(dinamicos)

const dinamicosGenericos1: DinamicosGenericos<string> = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: '30',
    puesto: 'SemiSenior'
}

const dinamicosGenericos2: DinamicosGenericos<number> = {
    nombre: 1,
    apellido: 2,
    edad: 3,
    puesto: 4
}

console.log(dinamicosGenericos2)
console.log(dinamicosGenericos1)