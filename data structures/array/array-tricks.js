const names = ["Kate", "Jane", "Jake", "Kim"]
const numbers = [12, 24, 53, 64, 86, 43, 56]
//============================================Cloning or copying an array
// const newNames = names.slice();
// const newNumbers = numbers.slice();

// console.log(newNames)
// console.log(newNumbers)

//============================================Checking if an item is an array
// console.log(Array.isArray(numbers))

// let student1 = {name:'A', age:7}
// console.log(Array.isArray(student1))

// console.log(Array.isArray(names))

//============================================Deleting an array item
// console.log(numbers.indexOf(64))

// const newNumbers = numbers.splice(2,4)
// console.log(numbers)

// function deleteArrayItem(id, arr){
//     const removeIndex = arr.indexOf(id);
//     if (removeIndex !== -1) {
//         arr.splice(removeIndex, 1)
//     }
//     else {
//         console.log('index does not exist')
//     }
//     console.log(arr.length);
// }
// deleteArrayItem(24, numbers);

// function deleteArrayItem(id, arr){
//     const removeIndex = arr.indexOf(id);
//     delete arr[removeIndex]
//     console.log(arr);
// }
// deleteArrayItem(24, numbers);

//============================================Emptying an array
// numbers.length = 0;
// console.log(numbers)

//============================================Sorting items
// let grades = [4, 5, 2, 3, 1, 7, 6]
// let fruits = ['mango', 'pear', 'orange', 'spinach']

// let sorted = grades.sort((a, b)=> b - a) //descending order
// let sorted2 = grades.sort((a, b)=> a - b) //ascending order
// let sorted3 = fruits.sort() //sorting strings

// console.log(sorted2)

//sorting object.........................

//============================================Picking a random item
// let randomValue = numbers[Math.floor(Math.random() * numbers.length)]
// console.log(randomValue)

//============================================Merging arrays
// let firstNames = ['Jake', "Jim", "Mark"]
// let lastNames = ['Bolt','Lamar']
// const mergedAray = [...firstNames, ...lastNames]
// console.log(mergedAray)

//============================================Swapping array items
// function swap(arr,indexA, indexB){
//     let v = arr[indexA];
//     arr[indexA] = arr[indexB]
//     arr[indexB] = v
// }
// swap(names, 0,2)
// console.log(names)

//============================================turning array into an object
// const obj = {...names}
// console.log(obj)

//============================================reversing an array
// let reversed = numbers.reverse() //modifies original array
// console.log(reversed)

// let reversed2 = [...numbers].reverse() //does not modify original array
// console.log(reversed2)

//============================================checking if all or some items pass a test
// const isEven = (input) => {
//     return input % 2 === 0
// }

// const isPositive = (input) => {
//     return input > 0;
// }

// console.log(numbers.some(isEven))
// console.log(numbers.every(isPositive))

//============================================converting an array of strings into numbers
// const namess = ['65', '75', '434']
// const namesss = [62, 75, 434]

// console.log(namess.map(Number))
// console.log(namesss.map(String))


//============================================exercise
// const gotCharacters = ["Jon Snow","Tyrion Lannister","Daenerys Targaryen","Arya Stark","Sansa Stark","Cersei Lannister","Jaime Lannister","Joffrey Baratheon","Robb Stark","Bran Stark","Stannis Baratheon","Margaery Tyrell","Theon Greyjoy","Ramsay Bolton","Petyr Baelish"];
// const sorted = gotCharacters.sort()
// console.log(sorted)

// let grades = [4, 10, 5, 7, 13, 20];
// const add= grades.reduce((a,b)=>a+b,0)
// console.log(add)