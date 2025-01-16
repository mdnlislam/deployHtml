
const output_message=document.querySelector('.output_message');
const  profiles=document.querySelectorAll('.profile');







profiles.forEach(function(profile){
	
	
	
	profile.addEventListener('click',function(){
	

	
	
	
	output_message.innerHTML=profile.innerHTML;
	
	
	profiles.forEach(function(item){
		
		item.style.backgroundColor='';
	});
	
	
	profile.style.backgroundColor='#737c81';
	
	output_message.scrollTop = 0; 
	
});
			
});