
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

/*const cars=["BMW","VOLVO","SAAB","FIAT"];

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

//map

const numbers=[4,9,16,25];

const result=numbers.map(Math.sqrt);

console.log(result);


//map function

const digits=[65,44,12,8];


const newArray=digits.map(myFunction);

function myFunction(num){
	return  num * 4;
}
console.log( newArray);
*/



/*let users = [
  {
    userId: "1",
    name: "Md. Rony mia",
    profileImage:
      "https://i.postimg.cc/bNk7LhDD/354873716-606127011649331-1303950734809081250-n.png",
    message: "Assalamu alaikum",
  },
  {
    userId: "2",
    name: "Md.Rakib",
    profileImage:
      "https://i.postimg.cc/RFJcHNbK/Whats-App-Image-2024-12-31-at-5-54-39-PM.jpg",
    message: "Assalamu alaikum",
  },
  {
    userId: "3",
    name: "Md.abdul Baki",
    profileImage: "https://i.postimg.cc/6Q9Z4Ngx/pngimg-com-dress-PNG92.png",
    message: "Assalamu alaikum",
  },
  {
    userId: "4",
    name: "Md.sakil",
    profileImage:
      "https://i.postimg.cc/bNk7LhDD/354873716-606127011649331-1303950734809081250-n.png",
    message: "Assalamu alaikum",
  },
  {
    userId: "5",
    name: "Md.minhaz",
    profileImage:
      "https://i.postimg.cc/KznrbH7j/Whats-App-Image-2024-11-04-at-7-09-09-PM.jpg",
    message: []
  },
  {
    userId: "6",
    name: "Md.sohel",
    profileImage:
      "https://i.postimg.cc/RFJcHNbK/Whats-App-Image-2024-12-31-at-5-54-39-PM.jpg",
    message:[{
		
		text:"Assalamu alaikum",
		date:new Date()
	} ]
  },
];




function Newmessage(message,id){
	users.map(function(user){
	
	if(user.userId==id){
		
	const messages=user.message||[];
	const messageobj={
		text:message,
		date:new Date()
	}
	messages.push(messageobj)
	}
	
	return user;
	
	
});
	
}

Newmessage("how are you",5);

	console.log(JSON .stringify(users, null, 2 ));
*/
let todos = [
  {
    userId: "1",
    name: "Md. Rony mia",
    profileImage:
      "https://i.postimg.cc/bNk7LhDD/354873716-606127011649331-1303950734809081250-n.png",
    message:[
	{
		text:'alhamdulillah',
		date:new Date()
	}
	]
  },
  {
    userId: "2",
    name: "Md.Rakib",
    profileImage:
      "https://i.postimg.cc/RFJcHNbK/Whats-App-Image-2024-12-31-at-5-54-39-PM.jpg",
    message: "Assalamu alaikum",
  },]
  
  
  
  
  
  
  
  function newMessage(message,id){
	  
	  
	  todos.map(function(todo){
	  
	  if(todo.userId==id){
		  
		const messages=todo.message||[];
		const messageobj={
			
			text:message,
			date:new Date()
		}
		messages.push(messageobj);
	  }
	  
	  
	  
	 return todo; 
	  
  });
	  
	  
	  
  }
  

  newMessage("how are you",1);
  
  console.log(JSON .stringify(todos, null, 2 ));