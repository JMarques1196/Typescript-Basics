// FUNCTIONS
function add(n1, n2) {
    return n1 + n2; // the best practice is to let TS infer the type!
}
function printResult(num) {
    console.log('Result: ' + num);
}
printResult(add(5, 12));
