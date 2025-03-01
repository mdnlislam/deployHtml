/**
1.first number nibo
2.then number to poin
3.then point to GPA
4.then this system deinamic

*/

const student={
	Arrabic:60,
	bangla:70,
	english:80
};




function NumberToPoint(marks){
	let points='';
	
	if(marks>=80){
		
		points='5.00';
	}
	else if(marks>=70){
		
		points='4.00';
	}
	else if(marks>=60){
		
		points='3.00';
	}
	else if(marks>=50){
		
		points='2.00';
	}
		
	return points
};

const point=NumberToPoint('70')









console.log(point);