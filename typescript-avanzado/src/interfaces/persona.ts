export enum Puesto {
    Junior = 'Junior',
    SemiSenior = 'SemiSenior',
    Senior = 'Senior'
}

export interface Person {
    nombre: string
    apellido: string
    edad: number
    puesto: Puesto
}