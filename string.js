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

/*let roll='246718';
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
 let array=text.split(" ");
 console. log(array[array.length-1]);
 
 let man="he is a good boy";
  let arr=man.split(" ",3);
  console.log(arr);
  
  //array to string
  
  const fruits=["Banana","Orange","Apple"];
  
  const str=fruits.toString();
  console.log(str);
  
  //map
  
  const numbers=[4,9,16,25];
  const map=numbers.map(Math.sqrt);
  console.log(map);
  
  const digit=[65,44,12,4];
  const arrs=digit.map(myFunction);
  
  
  function myFunction(num){
	  
	  
	  return num *2;
  };
  
  console.log(arrs);
  
  const persons =[
  
  {firstname : "Malcom", lastname: "Reynolds"},
  {firstname : "Kaylee", lastname: "Frye"},
  {firstname : "Jayne", lastname: "Cobb"}
  
  
  
  ];
  
  const per=persons.map(getFullName);
  
  function getFullName(item,i){
	  
	  return [item.firstname,item.lastname].join("");
  };
  
  console.log(per);
  
  //filter
  
  const ages=[32,33,16,40];
  
  const Adult=ages.filter(checkAdult);
  
  function checkAdult(age){
	  
	  return age >32;
  };
  
  console.log(  Adult);
  
  //find
  
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


let roll=246718;
let result=roll.toString();
console.log(result)

let A='Apple';
let B='Bat';
let C='cat';

const firstCon=A+B+C;
const seconCon=A.concat(B,C);
const thirtCon=`${A}${B}${C}`;

console.log(firstCon,seconCon,thirtCon);

// string to array 
let string='you are you';
let array=string.split(" ");
console.log(array);

//4. array to string
const itemname=["BMW","TVS","RUNNER","HONDA"];

const Str=itemname.toString();
console.log(Str);


//5. map

const digit=[13,47,9,58,98];

const arr=digit.map(myfunction);


function myfunction(num){
	
	
	return num *2
}

console.log(arr)

const persons=[

{FirstName:"Rakib",lastname:"Mia"},
{FirstName:"Rony",lastname:"Mia"},
{FirstName:"basir",lastname:"Mia"}




];

const per=persons.map(mapfunction);

function mapfunction(item){
	
	
	
	return [item.FirstName,item.lastname].join(" ")
};

console.log(per);

//6. filter

/*const ages=[12,34,13,45,2,4,56];

const Adult=ages.filter(AdultFunction);
 function AdultFunction(age){
	 
	 
	 
	 return age>10;
 };
console.log(Adult);

*/

//7. find

const ages=[12,23,45,67,34,3];

const checkAge=ages.find(checkFunction);
function checkFunction(age){
	
	return age>23;   // ata bojte hobe
};
console.log(checkAge);