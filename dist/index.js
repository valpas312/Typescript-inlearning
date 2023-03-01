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
class Auto {
    constructor(marca, color) {
        this._marca = marca;
        this._color = color;
    }
    descripcionAuto() {
        return `El auto es de marca ${this._marca} y es de color ${this._color}. ${this.velocidadAuto()}`;
    }
    velocidadAuto() {
        return 'La velocidad del auto es de 100km/h';
    }
}
const auto1 = new Auto('Ford', 'rojo');
console.log(auto1.descripcionAuto());
class AutoElectrico extends Auto {
    constructor(marca, color, capacidadBateria) {
        super(marca, color);
        this._capacidadBateria = capacidadBateria;
    }
    descripcionAuto() {
        return `El auto es de marca ${this._marca}, es de color ${this._color} y tiene una capacidad de bateria de ${this._capacidadBateria}. ${this.velocidadAuto()}`;
    }
}
const autoElectrico1 = new AutoElectrico('Tesla', 'verde', 100);
console.log(autoElectrico1.descripcionAuto());
class Auto2 {
    constructor(marca, color) {
        this.marca = marca;
        this.color = color;
    }
    descripcionAuto() {
        return `El auto es de marca ${this.marca} y es de color ${this.color}.`;
    }
}
const auto2 = new Auto2('Ford', 'rojo');
console.log(auto2.descripcionAuto());
class Auto3 {
    static descripcionAuto() {
        return `El auto es de marca ${this.marca}.`;
    }
}
Auto3.marca = 'Ford';
console.log(Auto3.descripcionAuto());
var TipoAuto;
(function (TipoAuto) {
    TipoAuto["Deportivo"] = "Deportivo";
    TipoAuto["Familiar"] = "Familiar";
})(TipoAuto || (TipoAuto = {}));
var TipoCombustible;
(function (TipoCombustible) {
    TipoCombustible["Nafta"] = "Nafta";
    TipoCombustible["Diesel"] = "Diesel";
})(TipoCombustible || (TipoCombustible = {}));
class Auto4 {
    constructor(marca, color) {
        this.marca = marca;
        this.color = color;
    }
    descripcionAuto() {
        return `El auto es de marca ${this.marca} y es de color ${this.color}.`;
    }
    hacerMantenimiento(elemento) {
        TipoAuto ? console.log('Se hizo mantenimiento al auto') : console.log('Se hizo mantenimiento al motor');
    }
}
const auto4 = new Auto4('Ford', 'rojo');
auto4.hacerMantenimiento(TipoAuto.Deportivo);
function funcionGenerica(arg) {
    console.log(arg);
    return arg;
}
const resultado = funcionGenerica('a');
console.log(resultado);
const resultado2 = funcionGenerica(1);
console.log(resultado2);
const resultado3 = {
    id: 1
};
console.log(resultado3);
class Frutero {
    constructor(frutas) {
        this.frutas = frutas;
    }
    getFrutas() {
        return this.frutas;
    }
    setFrutas(frutas) {
        this.frutas = frutas;
    }
}
const frutero1 = new Frutero(['manzana']);
frutero1.setFrutas(['manzana', 'pera', 'banana']);
console.log(frutero1.getFrutas());
//# sourceMappingURL=index.js.map