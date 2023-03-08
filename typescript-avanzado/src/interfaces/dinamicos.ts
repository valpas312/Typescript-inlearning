export default interface Dinamicos {
    nombre: string;
    apellido: string;
    [key: string]: string | number | boolean | object | any;
}