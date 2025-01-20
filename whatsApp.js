const output_img = document.querySelector(".output_message img");
const output_name = document.querySelector(".output_message .right .name");
const output_message = document.querySelector(".output_message img");
const right_toper=document.querySelector('.right_toper');
//console.log((output_message.src = "dfdfd"));
const profiles = document.querySelectorAll(".profile");

profiles.forEach(function (profile) {
  profile.addEventListener("click", function () {
    // output_img.innerHTML = profile.innerHTML;
    const child = profile.childNodes;
    const name = child[3].childNodes[1].innerText;
    output_name.innerText = name;
    // console.log(name);
    const message = child[3].childNodes[3].innerText;
    // console.log(message);
    const src = child[1].src;
    // console.log(img);
    output_img.src = src;
    profiles.forEach(function (item) {
      item.style.backgroundColor = "";
    });
    right_toper.style.display='flex';

    profile.style.backgroundColor = "#737c81";

    // output_img.scrollTop = 0;
	
	const from=document.querySelector('.input_message');
	const message_2=document.querySelector('.text_message .message1');
	console.log(message_2);
	const input_text=document.querySelector('.inputs');
		input_text.style.color='red';
	
	from.addEventListener('Submit',function(event){
		event.preventDefault();
		
		message_2.innerHTML=input_text.value;
	});
	
	
	//console.log(from);
	
	
  });
    right_toper.style.display='none';
  
});
