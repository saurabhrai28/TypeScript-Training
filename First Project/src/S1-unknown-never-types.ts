//************************** The unknown type ****************************/

// let userInput: unknown;
// let userName: string;

// userInput = 5;
// userInput = "Saurabh";
// if (typeof userInput ==='string'){
//     userName = userInput;
// }


//************************** The never type *******************************/

let userInput1: unknown;
let userName: string;

userInput1 = 5;
userInput1 = "Saurabh";
if (typeof userInput1 ==='string'){
    userName = userInput1;
}

function generateError(message: string, code: number):never{
    throw{message: message, errorCode: code};
    //while(true){}
}
// const result = generateError('An error orrcured', 500);
// console.log(result);
generateError('An error orrcured', 500)