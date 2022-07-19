////// Unknown

let userInput: unknown; // unknown is more restrictive than any
let userName: string;

userInput = 5;
userInput ='Andre';

if( typeof userInput === 'string'){
userName = userInput; // userName needs a string, but input cant guarantee a string, so it throws a error
    // The if cycle gets rid of the error
}

///// Never
function generateError(message: string, code: number): never{ // This function will NEVER return anything. Trying to  assign it will crash the script
    throw{message: message, errorCode: code} 
}

generateError('An error occurred', 500);