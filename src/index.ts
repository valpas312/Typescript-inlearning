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