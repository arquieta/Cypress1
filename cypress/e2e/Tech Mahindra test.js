
/**

 * [Javascript - Array refinement]

 *    => You initially have an unsorted array

 *    => We need you to programmatically create 3 arrays from it:

 *      => An array holding all elements that start with the letter "A"

 *      => An array holding all elements that start with the letter "B"

 *      => An array holding all elements that start with the letter "C"

 *    => These new arrays need to be SORTED in DESCENDING ORDER.

 *    => These new arrays need to be printed out to the console in the following format:

 *        * Elements with first letter "A": [<content of array>]

 *        * Elements with first letter "B": [<content of array>]

 *        * Elements with first letter "C": [<content of array>]

 * ********************************************************************

 *     YOU MUST CREATE AT LEAST 1 FUNCTION TO REACH YOUR SOLUTION

 * ********************************************************************

 */

function techTest(arr) {
    let arrayA = []
    let arrayB = []
    let arrayC = []

    for (let i = 0; i < arr.lenght; i++) {
        const primerLetra = arri[i][0];
        if( primerLetra === 'A' || primerLetra === 'a') {

            arrayA.push(arr[i]);

        } else if ( primerLetra === 'B' || primerLetra === 'b') {

            arrayB.push(arr[i]);
    }
    else if ( primerLetra === 'C' || primerLetra === 'c') {

        arrayC.push(arr[i]);
}}

arrayA.sort((a, b) =>  b.localCompare(a));
arrayB.sort((a, b) =>  b.localCompare(a));
arrayC.sort((a, b) =>  b.localCompare(a));

console.log('Elements with first letter "A":' [$(arrayA.join(', '))])
console.log('Elements with first letter "B":' [$(arrayB.join(', '))])
console.log('Elements with first letter "C":' [$(arrayC.join(', '))])
}

let arr = [

  'Brock', 'Karen', 'Daniel', 'Caroline', 

  'Allie', 'Beth', 'Carl', 'David', 'Anna',

  'John', 'Ben', 'Hank', 'Amon', 'Bill',

  'Clark', 'Brooke', 'Diane', 'Carmen', 'Betty', 

  'Abigail', 'Bethany', 'Blake', 'Carter', 'Chelsea'

];