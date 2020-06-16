

// starting point = 100, source array = [1, 2, 3]
// returns a running total when not given a starting point 

// then it returns a running total when given a starting point(100)
// total should equal 106..
function reduceToTotal(sourceArray, startingPoint=0) {

    let total = startingPoint

    let result = sourceArray.forEach(num => {
        total = total + num
    })

    return total
    
}
// returns true when all values are truthy

function reduceToAllTrue(sourceArray) {
    
    let checker = sourceArray.every(Boolean)

    return checker

}

function reduceToAnyTrue(sourceArray) {

   if (sourceArray.includes(true)) {
       return true
   } else {
       return false;
   }


}




// // Your code here

// // make [1, 2, 3, -9] = [-1, -2, -3, 9]

// //use map on the sourcearray
// // multiply each index by -1
// // return new array 

// function mapToNegativize(sourceArray) {
//     let newSourceArray = sourceArray.map(number => {
//         return number * -1
//     })
//     return newSourceArray
// }
// /* source array = ['paul', 'gurney', vladimir, jessica, chani]
// first step set a variable and use map on the source array. 
// return that new array that actually is the same array. 
// */

// function mapToNoChange(sourceArray) {
//     let newArray = sourceArray.map(name => {
//         return name
//     })
//     return newArray;
// }
// // source array = [ 1, 2, 3, -9 ] we want to double each index (multiply by two)
//     // set variable, use map on source array return number * 2
//     //return new array
// function mapToDouble(sourceArray) {
//     let doubledArray = sourceArray.map(number => {
//         return number * 2;
//     })
//     return doubledArray;
// }

// // sourceArray = [ 1, 2, 3, -9 ] result should be [1, 4, 9, 81]
// // set variable, use map on array, return square root of each element
// // return new array
// function mapToSquare(sourceArray) {

//     let result = sourceArray.map(number => {
//         let squared = Math.pow(number, 2)
//         return squared
//     })
//     return result;
// }