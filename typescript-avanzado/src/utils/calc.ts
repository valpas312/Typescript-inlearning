class Calculadora {
    constructor() {
        console.log('Calculadora');
    }

    sumar(...numeros: number[]): number {
        return numeros.reduce((acc, curr) => acc + curr);
    }

    restar(...numeros: number[]): number {
        return numeros.reduce((acc, curr) => acc - curr);
    }
}

export default Calculadora;