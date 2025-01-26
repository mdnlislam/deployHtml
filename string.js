/*### string
1. number to string
2. concat (3 ways)
*/

/*let roll=246718;

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
*/
/*### string
1. number to string
2. concat (3 ways)
3. string to array 
4. array to string
5. map
6. filter
7. find
*/

let roll='246718';
let string=roll.toString();
console.log(string);

//concat (3 ways); 0

let a='apple';
let b='bat';
let c='cat';

let firstconcat=a+b+c;
let seconConcat=a.concat(b,c);
let thiredConcat=`${a}${b}${c}`;

console.log(firstconcat,seconConcat,thiredConcat);



//string to array 

let text="how are you doing today";
 let array=text.split("");
 console log(array);