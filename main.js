/*  Task 1 --------------
Write a function expression called reverseString(). 
It should accept a single argument representing a person's name. 
It should return a reverse string as shown below: 
*/

let reverseString = (name) => {
    let newName = ''
    for (let i = name.length -1; i >= 0; i--){
        newName += name[i]
    }
    return newName
}
console.log(reverseString("John"));
console.log(reverseString("James"));
// prints: nhoJ and semaJ

/* Task 2 ---------------
Write a function expression called reverseArray().
It should accept an array as a single argument.
It should return a reversed array and it should work for any data type.
*/

function reverseArray(array) {
    newArray = []
    for (let i = array.length -1; i >= 0; i--){
        newArray.push(array[i])
    }
    return newArray
}
console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(reverseArray(["I", "like", "JavaScript"]));
/* prints:
[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
["JavaScript", "like", "I"]  
*/

/* Task 3 ---------------
Write a function expression called mostExpensiveItem(). 
It should accept an array of items as a single argument. 
It should return the item that has the most cost tied up, calculated by the amount in stock * price.
 */

function mostExpensiveItem(array) {
    maxObj = array[0]
    maxPrice = array[0].price * array[0].stock
    for (let i = 1; i < array.length; i++) {
        if (array[i].price * array[i].stock > maxPrice){
            maxPrice = array[i].price * array[i].stock
            maxObj = array[i]
        } 
    } return maxObj
}

testArray = [
    { item: "7up", price: 3.99, stock: 42 }, 
    { item: "fanta", price: 3.98, stock: 45 },
    { item: "irn bru", price: 3.25, stock: 50 },
    { item: "diet coke", price: 4.40, stock: 38 },     
 ]
console.log(mostExpensiveItem(testArray))
/* prints:
{ item: 'fanta', price: 3.98, stock: 45 }
*/

