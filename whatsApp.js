const output_img = document.querySelector(".output_message img");
const output_name = document.querySelector(".output_message .right .name");
const output_message = document.querySelector(".output_message img");
const right_toper = document.querySelector(".right_toper");
//console.log((output_message.src = "dfdfd"));
const profiles = document.querySelectorAll(".profile");
const id = document.querySelector("#id1").id;
//console.log(id);

profiles.forEach(function (profile) {
  profile.addEventListener("click", function () {
    // clear message

    document.querySelector(".messages").innerHTML =
      '<div class="message_tracker" style="font-size:30px;">	</div>';
    // output_img.innerHTML = profile.innerHTML;
    const child = profile.childNodes;
    console.log(child);
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
    right_toper.style.display = "flex";

    profile.style.backgroundColor = "#737c81";
  });
  right_toper.style.display = "none";
});

const from = document.querySelector(".input_message");

const input_text = document.querySelector(".inputs");

from.addEventListener("submit", function (event) {
  event.preventDefault();
  const message_tracker = document.querySelector(".message_tracker");

  const html = `<div>${input_text.value}</div>`;

  message_tracker.insertAdjacentHTML("beforebegin", html);

  input_text.value = "";
});

const users = [
  {
    userId: "1",
    name: "Md. Rony mia",
    profileImage:
      "https://i.postimg.cc/bNk7LhDD/354873716-606127011649331-1303950734809081250-n.png",
    message: "Assalamu alaikum",
  },
  {
    userId: "2",
    name: "",
    profileImage: "",
    message: "",
  },
];
