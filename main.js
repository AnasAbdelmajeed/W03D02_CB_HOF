console.log(arrowTitle)
/* START CODE UNDER THIS LINE */

////////////////////////////////////////////////////
/////////////////  Pulse Check   ///////////////////
//1 Write a function that accepts two arguments, number and callback, and using the callback return the number squared.

const exampleFunction = function (x, y, callback) {
    return callback (Math.pow(x , y))
};


////////////////////////////////////////////////////

//2- Using forEach iterate over the following arrays and console log all the indexes.

const numbers = [1, 2, 3, 4];
const animals = ["Cat", "Dog", "Bear", "Bat"];
numbers.forEach(function(element, index) {
    console.log(animals);
});

////////////////////////////////////////////////////

//3- Using map iterate over the following array and decrement all elements by 1.

const numbers1 = [1, 2, 3, 4];
const numbers2= numbers1.map(function(element, index){
    return element -1
})

////////////////////////////////////////////////////

//4- Using filter iterate over the following array and return all string values.

const array = [1, "two", "three", 4];
const arr = array.filter(function(element, index){
    return  array.length["string"]
});

////////////////////////////////////////////////////

//5- Using reduce iterate over the following array and return the sum of all the numbers doubled.

const numbers3 = [1, 2, 3, 4];
const sum = arr.reduce(function(accumulator, element, index){
return accumulator + element;
},0);




