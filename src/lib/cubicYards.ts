export function cubicYards(squareFeet: number, height: number) {
    const cubicYards = squareFeet * height;
    return cubicYards;
}


export function calculateAll(width: number, length: number, height: number) {
    const squareFeet = width * length;
    const cubicYards = squareFeet * height;
    return cubicYards;
}
export function CubicYards(width: number, length: number, height: number) {
    const squareFeet = width * length;
    const cubicYard = ( squareFeet * height) / 27;
    return cubicYard;
}

function SquareFeet2CubicYards(squareFeet: number, height: number) {
    const cubicYards = squareFeet * height;
    return cubicYards;
}

function SquareFeet(width: number, length: number) {
    const squareFeet = width * length;
    return squareFeet;
}