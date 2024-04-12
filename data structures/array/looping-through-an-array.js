let firstNames = ['Jon', 'Jake', "Mani", "Kim"]
let numbers = [1,2,3,4,5,6]

//====================================================for loop
//the most popular and oldest way of looping through an array is by using the "for" loop

// for (let i = 0; i < firstNames.length;i++){
//     console.log(i, firstNames[i]) 
// }


//====================================================for of loop
// for (firstName of firstNames){
//     console.log(firstName)
// }

// //to access the index value of items
// for([index, firstName] of firstNames.entries()){
//     console.log(index, firstName)
// }

//====================================================for each
// firstNames.forEach((firstName, index)=>console.log(index,firstName))


//====================================================Looping in reverse
// for (let i = firstNames.length - 1; i >= 0; i--){
    //     console.log(firstNames[i])  
    // }
    
    // let reversedNumbers = numbers.slice().reverse();
    
    // for ([index, number] of reversedNumbers.entries()){
        //     console.log(index, number)
        // }
        
        // reversedNumbers.forEach((number, index)=>console.log(number, index))

//====================================================Inconsistencies
//"for" and "for...of" loop supports "break" and "continue" statements but not "forEach".

// for (let i = 0; i < numbers.length; i++){
    //     if (numbers[i] === 2) break;
    //     console.log(numbers[i])
    // }
    
    // for (number of numbers){
    //     if(number === 2) break;
    //     console.log(number)
// }

//====================================================Sparse array
//a sparse array is an array with some gaps in it.
// let sparse = [1,2,3]
// sparse[5] = 10
// console.log(sparse)
// console.log(sparse.length)
