const digits=[15,12,17,11,31,60,19,28];




for (let d in digits){
	
	
	
	for(let digit in digits){
	
	const first=digits[digit];
	const key2=Number(digit)+1;
	const last=digits[key2];
	
	
	
	if(first<last){
		digits[digit]=last;
		digits[key2]=first;
	}
	
}
	
	
	
	
	
}
	console.log(digits);
