let names = ["marge", "homer", "bart", "lisa", "maggie"];
let words = ["Where", "do", "you", "want", "to", "go", "today?"];
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
//======================================================Old School way

// let newNames = []
// for(let i = 0; i < names.length; i++){
//     let name = names[i];
//     newNames.push(name.charAt(0).toUpperCase() + name.slice(1))
// }
// console.log(newNames)


//======================================================Map method
// let newNames = names.map(name=>name.charAt(0).toUpperCase() + name.slice())
// console.log(newNames)

// function capitalize(name){
    //     return name.charAt(0).toUpperCase() + name.slice(1);
    // }
    // let newNames = names.map(capitalize)
    // console.log(newNames)
    
    

//======================================================Filter Method
// let newNumbers = numbers.filter(number=>number%2 === 0)
// console.log(newNumbers)

//======================================================Reduce Method
// let value  = numbers.reduce((total,current) => total + current, 0)
// console.log(value)

// let sentence = words.reduce((total, current) => total + ' ' + current)
// console.log(sentence);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>NOTEs
//- name.slice(1) returns a new string containing the characters of the original string starting from the index 1 
//- slice() creates a new array containing a portion of the original array.
//- charAt() returns the index of a character within a string
//- reduce method combines all elements in array into a single value.
//- map and filter methods return a new array. The original array is never modified.