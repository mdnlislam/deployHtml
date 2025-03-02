/**
1.first number nibo
2.then number to poin
3.then point to GPA
4.then this system deinamic

*/

const subject={
	Arrabic:80,
	bangla:80,
	english:70
};
const subject2={
	Arrabic:80,
	bangla:80,
	english:80
};

const subjects=[subject,subject2];

for(let subject in subjects){
const subjectss=subjects[subject];	
	//console.log(subjectss)
const gpa=subjectsToGpa(subjectss)
console.log(gpa);
	
};


function subjectsToGpa(subject){
	
	console.log(subject);
	
function NumberToPoint(marks){
	let points='';
	
	if(marks>=80){
		
		points=5.00;
	}
	else if(marks>=70){
		
		points=4.00;
	}
	else if(marks>=60){
		
		points=3.00;
	}
	else if(marks>=50){
		
		points=2.00;
	}
		
	return points
};


let point=0;
for(let subjects in subject){
	const subjectNumber=subject[subjects];
const x=NumberToPoint(subjectNumber);
	point =point+x;
	
};


const subjectLength=Object.keys(subject).length;
const GPA=point/subjectLength;


function gpaToGreat(point){
	let Great='';
	
	if(point>=5.00){
		Great='A+';
			
	}
	else if(point>=4.00){
		Great='B+';
			
	}
	else if(point>=3.00){
		Great='C+';
			
	}
	else if(point>=2.00){
		Great='D+';
			
	}
	return Great;
};


const GREAT=gpaToGreat(GPA);
	
	
	return GREAT;
	
};


