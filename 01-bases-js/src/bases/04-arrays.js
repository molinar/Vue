const array = [1,2,3,4]
array.push(5)

const array2 = array
array2.push(6)

console.log(array)
console.log(array2)

const array3 = [ ...array]
array3.push(7)

console.log(array3)

const array4 = array3.map( function ( n ){
    return n * 2
} )

array4.push(16)

console.log(array4)

const arrayOtro = new Array(10)
console.log(arrayOtro)