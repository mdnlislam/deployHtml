
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

/*const product={
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
*/
 /*### Object
1. typeof object
2. object to string
3. separet key & valus
4. valus access
5. valus change or update or add
6. property delete
*/

//1. typeof object 2 kind 1.object 2.array object


//2. object to string

/*const product={
	name:'Rony',
	roll:246718,
	color:'red'
};
//const objTostr=JSON.stringify(product)

const accessKey=Object.keys(product);
const accessValues=Object.values(product);
console.log(accessKey,accessValues);

//4. valus access

const valueAcc=product['screen']=7.6;
delete product['color'];
console.log(product);


### Object
1. typeof object
2. object to string
3. separet key & valus
4. valus access
5. valus change or update or add
6. property delete

*/



//1. typeof object  2 type of object 1.object 2.Array object


//2. object to string

/*const product={
	A:'apple',
	B:'bat',
	C:'cat'
};

const objectToStr=JSON.stringify(product);

const keysAccess=Object.keys(product);
const valueAccess=Object.values(product);
//valus access
const valueA= typeof product['A'];
//value add
const valueAdd=product['s']='32';
//value update

//property delete
delete product['A'];
const valueUpdate=product['B']='belt';
console.log( product );

*/

/*### Object
1. typeof object
2. object to string
3. separet key & valus
4. valus access
5. valus change or update or add
6. property delete

*/

// type of object 2 type object 1.object 2.array object


//2. object to string

const product={
	name:'i-phone',
	color:'block',
	
};
//3. separet key & valus

const key=Object.values(product);
const add=product['screen']='7-inch'

delete product['name'];
console.log(product);

const objectTostr=JSON.stringify(product);
console.log( typeof objectTostr);