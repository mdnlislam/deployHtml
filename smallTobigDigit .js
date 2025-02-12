const digits=[15,12,17,11,31 ,60,19,28];
const digits2=[17,15,12];
const r1=[15,12,17];


for(let digit in digits){
	const first=digits[digit];
	const key2=Number(digit)+1;
	const last=digits[key2];
	
	//console.log(last);
	if(first>last ){
	digits[digit]=last;
    digits[key2]=first;	
	}
	//console.log(digits);
 

for(let d in digits){
	const first=digits[d];
	const key2=Number(d)+1;
	const last=digits[key2];
	
	//console.log(last);
	if(first>last ){
	digits[d]=last;
    digits[key2]=first;	
	}
	//console.log(digits);
 
//for(){}
	
} 
} 



console.log(digits);
// Output: [1, 2, 3, 5, 8]






	console.log(digits);
	
	
 /*for(let i=0;i<digits.length;i++){
	 const first=digits[i];
	 const key2=digits;
	
	if(first,key2){
	 return a-b
		
	}
	 
	console.log(digits); 
 } */