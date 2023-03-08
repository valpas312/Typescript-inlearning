export default interface DinamicosGenericos<T> {
    nombre: T;
    apellido: T;
    [key: string]: T;
}