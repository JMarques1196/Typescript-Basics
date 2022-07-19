// UNION TYPES -- LITERAL TYPES -- ALIASES

//ALias allow to create custom types to write cleaner / less lines of code
type Combinable = number | string; // Combines types in a custom type
type ConversionDescriptior = 'as-number' | 'as-text'; 
/////////////////////////////////////////////////////////////


function combine(input1: number | string, input2: number | string, resultConversion: string){

    let result;

    if(typeof input1 === 'number' && typeof input2==='number' || resultConversion === 'as-number'){
        result = +input1 + +input2;
    }else{
        result=input1.toString() + input2.toString();
    }

    // if(resultConversion==='as-number'){
    //     return +result; // + converts result to a number
    // }else{
    // return result.toString();
    // }
    return result;
}

const combinedAges = combine(30,26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);

const combinedNames= combine('Max', 'Ana', 'as-text');
console.log(combinedNames);