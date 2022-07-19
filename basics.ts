function add(n1: number,n2: number, showResult: boolean, phrase: string){

    let result = n1+n2;
    if(showResult){
        console.log(phrase + result);
    }else{
        return result;
    }
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';

// The core principle of typescript is to check types and lets us know ahead of time.
// It doesent interfere with compilation

add(number1, number2, printResult, resultPhrase);

