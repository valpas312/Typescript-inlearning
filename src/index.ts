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