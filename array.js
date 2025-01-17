
/*### Array Object
1. how to identify array
2. data add,add data start of array,add data end of array,delete data start of array,delete dada end  of array
3. data update ,delete
4. find mathode
*/

 // how to identify array
 
 const fruits=["Banana","Orange","Apple","Mango"];
 
 const result=Array.isArray(fruits);
 
 console.log(result);

//data add

const number=[1,2,3,4,5];
number.push(6);
number.unshift(0);

//delete data start of array,

number.shift()
number.pop();
console.log(number);

const productitem=["BMW","TVR","HONDA","SUZUKI"];

const results=productitem[1];
 const length=productitem.length;
 
 
console.log(results,length);

let text = "How are you doing today?";
const myArray = text.split("o");
console.log(myArray)