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
