// FUNCTIONS

function add(n1: number, n2:number): number { // : number indicates the type of the return. If there's no specific reason to indicate the type
    return n1 + n2  // the best practice is to let TS infer the type!
}

function printResult(num: number): void{
    console.log('Result: ' + num);
}

let combineValues: (a: number, b: number) => number; // combineValue must take 2 parameters ( in this case numbers) and return a number
combineValues = add;

console.log(combineValues(8,8));

printResult(add(5,12));