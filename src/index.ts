//notacion literal de variables
let mensaje: string
mensaje = 'Hola Mundo'

let numero: number
numero = 123

//inferencia de tipo de dato
let mensaje2 = 'Hola Mundo 2'
// mensaje2 = 123

//tipo 123
const numero2 = 123

class Persona{}

//tipo de dato Persona
let persona = new Persona()

//tipos de arreglos
const arreglo: number[] = [1, 2, 3, 4, 5]
const arreglo2: Array<number> = [1, 2, 3, 4, 5]

//objeto
interface Usuario{
    nombre: string
}

const usuarioArray: Usuario[] = [{nombre: 'Juan'}, /*12*/]

//funciones
//recibe un valor de tipo number y retorna un valor de tipo number
function suma(a: number, b: number): number{
    return a + b
}

//recibe un valor de tipo string y devuelve un booleano
const filtro = (valor:string) : boolean => {
    return valor.length >= 5
}

const animales :string[] = ['perro', 'gato', 'caballo', 'conejo', 'pajaro']

const animalesFiltrados = animales.filter(filtro)

//tipos any y unknown

//any permite asignar cualquier tipo de dato sin errores
let x: any
x = 1
x = 'hola'
x = true

let variableString: string = x

//unknown permite asignar cualquier tipo de dato pero no permite acceder a sus propiedades
let y: unknown
y = 1
y = 'hola'
y = true

// variableString = y

//usar solo cuando sea necesario, no es recomendable

//null y undefined
let variableNull: null = null
let variableUndefined: undefined = undefined

//never y void

//void es un tipo de dato que no retorna nada
function funcionVoid(): void{
    console.log('Hola Mundo')
}

//never es un tipo de dato que nunca sucede
function funcionNever(): never{
    throw new Error('Error')
}

//uniones de tipos
let variableUnion: number | string
variableUnion = 1
variableUnion = 'hola'

let variableUnion2: number | string | boolean
variableUnion2 = 1
variableUnion2 = 'hola'
variableUnion2 = true

//en funciones
function funcionUnion(a: number | string): number | string{
    return a
}

function calcularPromedio (valores: number | number[], total?: number): number | never {
    if (typeof valores === 'number') {
        return valores
    }

    if (Array.isArray(valores)) {
        return valores.reduce((a, b) => a + b) / (total || valores.length)
    }

    throw new Error('El valor no es un número ni un arreglo')
}

calcularPromedio(1)
calcularPromedio([1, 2, 3])
calcularPromedio([1, 2, 3], 3)
// calcularPromedio('a')

//alias
type Perro = 'perro'
type Gato = 'gato'

type Mascota = Perro | Gato

let miMascota: Mascota = 'perro'
// miMascota = 'pajaro'

type ListaMascotas = Array<Mascota>
const misMascotas: ListaMascotas = ['perro', 'gato']

//podemos crear tipos de datos que acepten dos valores de distinto tipo

//interfacess u objetos

interface Huesped{
    idhuesped: number
    nombre: string
    apellido: string
    telefono: string
    email: string
    direccion: string
}

type Piso = 'piso 1' | 'piso 2'

interface Habitacion{
    idhabitacion: number
    numero: number
    piso: Piso
    precioNoche: number
}

interface Reserva{
    idreserva: number
    huesped: Huesped
    habitacion: Habitacion
    fechaEntrada: Date
    fechaSalida: Date
    noches: number
}

const datosHuésped: Huesped = {
    idhuesped: 1,
    nombre: 'Juan',
    apellido: 'Perez',
    telefono: '123456789',
    email: 'huesped@email.com',
    direccion: 'Calle 123'
}

const datosHabitacion: Habitacion = {
    idhabitacion: 1,
    numero: 1,
    piso: 'piso 1',
    precioNoche: 100
}

const datosReserva: Reserva = {
    idreserva: 1,
    huesped: datosHuésped,
    habitacion: datosHabitacion,
    fechaEntrada: new Date(),
    fechaSalida: new Date(),
    noches: 1,
}

console.log(datosReserva)

//interfaces extendidas

interface AA{
    a: string
    b: number
    c: boolean
}

interface BB extends AA{
    d: string[]
}

interface CC{
    e: string | number
}

interface DD extends BB, CC{
    f: number
}

//contiene todos los tipos de datos de AA, BB, CC y DD
const datosDD: DD = {
    a: 'a',
    b: 1,
    c: true,
    d: ['a', 'b', 'c'],
    e: 'e',
    f: 1
}

//enums
enum Escalon{
    Primero = 1,
    Segundo,
    Tercero
}

console.log(Escalon.Primero)
console.log(Escalon.Segundo)
console.log(Escalon.Tercero)

//los enums siempre van a tener un orden, eso lo diferencia de los objetos y arrays

//tuplas
const tupla: [string, number, boolean] = ['a', 1, true]
//define el tipo de dato y la cantidad de elementos que va a tener el arreglo

interface PruebaInterface{
    a: string
    b: number
}

const promesa1 = Promise.resolve<boolean>(true)
const promesa2 = Promise.resolve<PruebaInterface>({a: 'a', b: 1})

//Se toman todas las promesas resueltas, despues se declara lo que tiene que retornar cada parametro y se muestra por consola
Promise.all([promesa1, promesa2])
    .then(([resultado1, resultado2] : [boolean , PruebaInterface]) => {
        console.log(resultado1, resultado2)
    })

//tipos literales
type TipoLiteral = 'a' | 'b' | 'c'

const letra = 'a'

//literalmente se le asignan strings al nuevo tipo y solo se pueden usar esos strings
//lo mismo con numeros, booleanos, etc

//operador keyof
interface Persona{
    nombre: string
    apellido: string
    edad: number
}

const persona1: Persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 20
}

const nombrePersona: keyof Persona = 'nombre'
console.log(nombrePersona)

//clases
type color = 'rojo' | 'verde' | 'azul'

class Auto{

    _marca: string | undefined
    _color: color | undefined


    constructor(marca: string, color: color){
        this._marca = marca
        this._color = color
    }

    descripcionAuto(){
        return `El auto es de marca ${this._marca} y es de color ${this._color}. ${this.velocidadAuto()}`
    }

    protected velocidadAuto(){
        return 'La velocidad del auto es de 100km/h'
    }
}

const auto1 = new Auto('Ford', 'rojo')
console.log(auto1.descripcionAuto())
// console.log(auto1.velocidadAuto())

//herencia
class AutoElectrico extends Auto{
    
        _capacidadBateria: number
    
        constructor(marca: string, color: color, capacidadBateria: number){
            super(marca, color)
            this._capacidadBateria = capacidadBateria
        }
    
        descripcionAuto(){
            return `El auto es de marca ${this._marca}, es de color ${this._color} y tiene una capacidad de bateria de ${this._capacidadBateria}. ${this.velocidadAuto()}`
        }
}

const autoElectrico1 = new AutoElectrico('Tesla', 'verde', 100)
console.log(autoElectrico1.descripcionAuto())

//interfaces en clases
//las interfaces en clases se usan para definir que propiedades y metodos tiene que tener la clase obligatoriamente
interface AutoInterface{
    marca: string
    color: color

    descripcionAuto(): string
}

class Auto2 implements AutoInterface{

    marca: string
    color: color

    constructor(marca: string, color: color){
        this.marca = marca
        this.color = color
    }

    descripcionAuto(){
        return `El auto es de marca ${this.marca} y es de color ${this.color}.`
    }
}

const auto2 = new Auto2('Ford', 'rojo')
console.log(auto2.descripcionAuto())

//metodos estaticas
class Auto3{
    
        static marca: string = 'Ford'
    
        static descripcionAuto(){
            return `El auto es de marca ${this.marca}.`
        }
}

console.log(Auto3.descripcionAuto())

//sobrecarga de metodos

enum TipoAuto{
    Deportivo = 'Deportivo',
    Familiar = 'Familiar'
}

enum TipoCombustible{
    Nafta = 'Nafta',
    Diesel = 'Diesel'
}

class Auto4{
    
        marca: string
        color: color
    
        constructor(marca: string, color: color){
            this.marca = marca
            this.color = color
        }
    
        descripcionAuto(){
            return `El auto es de marca ${this.marca} y es de color ${this.color}.`
        }
    
        hacerMantenimiento(elemento: TipoAuto): void;
        hacerMantenimiento(elementoCombustible: TipoCombustible): void;
        hacerMantenimiento(elemento: TipoAuto | TipoCombustible): void{
            TipoAuto ? console.log('Se hizo mantenimiento al auto') : console.log('Se hizo mantenimiento al motor')
        }
}

const auto4 = new Auto4('Ford', 'rojo')
auto4.hacerMantenimiento(TipoAuto.Deportivo)