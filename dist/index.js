"use strict";
let mensaje;
mensaje = 'Hola Mundo';
let numero;
numero = 123;
let mensaje2 = 'Hola Mundo 2';
const numero2 = 123;
class Persona {
}
let persona = new Persona();
const arreglo = [1, 2, 3, 4, 5];
const arreglo2 = [1, 2, 3, 4, 5];
const usuarioArray = [{ nombre: 'Juan' },];
function suma(a, b) {
    return a + b;
}
const filtro = (valor) => {
    return valor.length >= 5;
};
const animales = ['perro', 'gato', 'caballo', 'conejo', 'pajaro'];
const animalesFiltrados = animales.filter(filtro);
let x;
x = 1;
x = 'hola';
x = true;
let variableString = x;
let y;
y = 1;
y = 'hola';
y = true;
let variableNull = null;
let variableUndefined = undefined;
function funcionVoid() {
    console.log('Hola Mundo');
}
function funcionNever() {
    throw new Error('Error');
}
let variableUnion;
variableUnion = 1;
variableUnion = 'hola';
let variableUnion2;
variableUnion2 = 1;
variableUnion2 = 'hola';
variableUnion2 = true;
function funcionUnion(a) {
    return a;
}
function calcularPromedio(valores, total) {
    if (typeof valores === 'number') {
        return valores;
    }
    if (Array.isArray(valores)) {
        return valores.reduce((a, b) => a + b) / (total || valores.length);
    }
    throw new Error('El valor no es un número ni un arreglo');
}
calcularPromedio(1);
calcularPromedio([1, 2, 3]);
calcularPromedio([1, 2, 3], 3);
let miMascota = 'perro';
const misMascotas = ['perro', 'gato'];
const datosHuésped = {
    idhuesped: 1,
    nombre: 'Juan',
    apellido: 'Perez',
    telefono: '123456789',
    email: 'huesped@email.com',
    direccion: 'Calle 123'
};
const datosHabitacion = {
    idhabitacion: 1,
    numero: 1,
    piso: 'piso 1',
    precioNoche: 100
};
const datosReserva = {
    idreserva: 1,
    huesped: datosHuésped,
    habitacion: datosHabitacion,
    fechaEntrada: new Date(),
    fechaSalida: new Date(),
    noches: 1,
};
console.log(datosReserva);
const datosDD = {
    a: 'a',
    b: 1,
    c: true,
    d: ['a', 'b', 'c'],
    e: 'e',
    f: 1
};
var Escalon;
(function (Escalon) {
    Escalon[Escalon["Primero"] = 1] = "Primero";
    Escalon[Escalon["Segundo"] = 2] = "Segundo";
    Escalon[Escalon["Tercero"] = 3] = "Tercero";
})(Escalon || (Escalon = {}));
console.log(Escalon.Primero);
console.log(Escalon.Segundo);
console.log(Escalon.Tercero);
const tupla = ['a', 1, true];
const promesa1 = Promise.resolve(true);
const promesa2 = Promise.resolve({ a: 'a', b: 1 });
Promise.all([promesa1, promesa2])
    .then(([resultado1, resultado2]) => {
    console.log(resultado1, resultado2);
});
const letra = 'a';
const persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 20
};
const nombrePersona = 'nombre';
console.log(nombrePersona);
//# sourceMappingURL=index.js.map