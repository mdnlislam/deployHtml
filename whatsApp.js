
const output_message=document.querySelector('.output_message');

const  profile=document.querySelector('.profile');

profile.addEventListener('click',function(){
	
	output_message.innerHTML=profile.innerHTML;
	output_message.style.display='block';
});


console.log(output_message,profile);