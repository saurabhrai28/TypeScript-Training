
// ************************** Union Type **************************//

// function combine(input1: number | string , input2: number | string){
//     let result;
//     if(typeof input1 === 'number' && typeof input2 === 'number'){
//         result = input1 + input2;
//     }
//     else{
//         result = input1.toString() + input2.toString();
//     }        
//         return result;
//     }

// const combinedAges = combine(30,89);
// console.log(combinedAges)

// const combinedNames = combine('Saurabh ', 'Ankita');
// console.log(combinedNames)
 
// console.log("Your code goes here...Hello world!!")



// ************************** Literal Type **************************//

function combine(input1: number | string , input2: number | string, resultConversion: string){
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number'){
        result = input1 + input2;
    }
    else{
        result = input1.toString() + input2.toString();
    }        
    if(resultConversion === 'as-number'){
        return +result
    }else{
        return result.toString();
    }
        return result;
    }

const combinedAges = combine(30, 89, 'as-number');
console.log(combinedAges)

const combinedNames = combine('Saurabh ', 'Ankita', 'as-text');
console.log(combinedNames)

const combinedStringAges = combine('30', '89', 'as-number');
console.log(combinedAges)
 
console.log("Your code goes here...Hello world!!")




// ************************** Type Aliases/ Custom Type **************************//

// function combine(input1: number | string , input2: number | string, resultConversion: 'as-number'|'as-text'){
//     let result;
//     if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === ){
//         result = +input1 + +input2;
//     }
//     else{
//         result = input1.toString() + input2.toString();
//     }        
//     //  
//         return result;
//     }

// const combinedAges = combine(30, 89, 'as-number');
// console.log(combinedAges)

// const combinedNames = combine('Saurabh ', 'Ankita', 'as-text');
// console.log(combinedNames)

// const combinedStringAges = combine('30', '89', 'as-number');
// console.log(combinedAges)
 
// console.log("Your code goes here...Hello world!!")



