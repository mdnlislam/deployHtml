
/*### Condition
1. if else      
2. switch
Function
*/

//if else      
	
const time=new Date().getHours();

let greeting;

if(time<10){
	greeting="Good morning";
}
else if (time<20){
	greeting="Good day";
}
else{
	greeting="Good evening";
}

console.log(greeting);

//switch

let day;
switch(new Date().getDay()){

case 0:
	
day="sunday";

break;
	
case 1:

day="Monday";

break;

case 2:

day="tuesday";
break;
case 3:

day="Wednesday";
break;
case 4:
	
day="thursday";
break;

case 5:
day="friday";

break;

case 6:
day="saturday";

	
}
console.log(day);