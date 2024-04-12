let groceries = ["milk","orange","oat","soft drink"]

//===============================================adding items to array
// groceries.push("juice") //add item at the end
// groceries.unshift("malt") //add item at the beginning

//===============================================removing items from array
// groceries.pop()
// let removedItem = groceries.pop()
// console.log(removedItem)

// groceries.shift() //remove first item
// let removedItem = groceries.shift()
// console.log(removedItem)

//===============================================replacing items
// groceries[0] = "toothpase"
// groceries[groceries.length-1] = "keyboard"

//===============================================finding items
// console.log(groceries.indexOf('milk')) //if item exists, item index position will be returned
// console.log(groceries.indexOf('me')) //else, -1 will be returned

//===============================================slice method
// const slice = groceries.slice()
// const slice2 = groceries.slice(1)
// const slice3 = groceries.slice(1,3)

// console.log(slice)
// console.log(slice2)
// console.log(slice3)

console.log(groceries.splice(1,2))