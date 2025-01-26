
/*### Object
1. typeof object
2. object to string
3. separet key & valus
4. valus access
5. valus change or update or add
6. property delete
*/
//typeof object 2 type 1.object and 2. array object


//object to string

/*const product={
	A:'Apple',
	B:'bat',
};
const objectToString=JSON.stringify(product);
console.log(objectToString);

//separet key & valus

const keys=Object.keys(product);
const value=Object.values(product);

console.log(keys,value);

// valus access

const product1={
	name:'i-phone',
	model:'x-altra',
	colour:'black',
};

const valueAccess=product1['colour'];

console.log(valueAccess);


//valus change or update or add

 product1['colour']='white';
 // property delete
 delete product1['model'];
 
 console.log(product1);
 */
 
 /*### Object
1. typeof object
2. object to string
3. separet key & valus
4. valus access
5. valus change or update or add
6. property delete
*/

// type of object -object and array object

//object to string

const product={
	name:"rony",
	id:246718,
	color:"red",
}; 

const objectTostring=JSON.stringify(product);

const keys=Object.keys(product);

const value=Object.values(product);
const valueA=product['color']='green';
const update=product['model']='x-altra';

 delete product['color'];
console.log(product);