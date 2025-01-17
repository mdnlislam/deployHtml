/*### string
1. number to string
2. concat (3 ways)
*/

let roll=246718;

let numberTostring=roll.toString();

console.log(numberTostring);

//concat (3 ways)

let A='Apple';
let B='bat';
let C='cat';

const firstConcat=A .concat(B,C);
const seconConcat=A+B+C;
const thirdConcat=`${A}${B}${C}`;

console.log(firstConcat,seconConcat,thirdConcat);