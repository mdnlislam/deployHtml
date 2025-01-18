
/*### Loop
1. for
2. while
3. Do while
4. map
5. forEach
6. for in
7. for of
8. for loop decrement
*/

//for

const cars=["BMW","VOLVO","SAAB","FIAT"];

for (i=0;i<cars.length; i++){
	
	const result=cars[i];
	//console.log(result);
}

//for in


const person={
	fname:"john",
	Lname:"Don",
	age:25,
};

for(let  x in person){
	const result=person[x];
	console.log(result);
}

//for of

const cars1=["BMW","Volvo","Mini"];

for(let item  of cars1){
	console.log(item);
}

//forEach

const fruits =["apple","orange","cherry"];

fruits.forEach(myFunction);

function myFunction(item ,index ){
	const eee=item+index;
	
	console.log(eee);
}