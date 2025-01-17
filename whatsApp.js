const output_message = document.querySelector(".output_message");
const profiles = document.querySelectorAll(".profile");

profiles.forEach(function (profile) {
	
  profile.addEventListener("click", function () {
    output_message.innerHTML = profile.innerHTML;
	const child=profile.children;
	const img=child[0];
   console.log(img);
    profiles.forEach(function (item) {
      item.style.backgroundColor = "";
    });

    profile.style.backgroundColor = "#737c81";

    output_message.scrollTop = 0;
  });
});
