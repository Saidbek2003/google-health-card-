const body = document.querySelector('body'),
sidebar = body.querySelector('nav'),
toggle = body.querySelector(".toggle"),
modeSwitch = body.querySelector(".toggle-switch"),
home_link = body.querySelector(".home_link"),
history_ills_link = body.querySelector(".history_ills_link"),
hard_ills_link = body.querySelector(".hard_ills_link"),
home = body.querySelector(".home"),
section_ills= body.querySelector(".history_ills"),
modeText = body.querySelector(".mode-text");



toggle.addEventListener("click" , () =>{
sidebar.classList.toggle("close");
})
function addActive_home() {
  home.classList.add("avtive");
  section_ills.classList.remove("avtive");
}

function addActive_ills() {
  home.classList.remove("avtive")
  section_ills.classList.add("avtive");
}


home_link.addEventListener(("click"),addActive_home);
history_ills_link.addEventListener(("click"),addActive_ills);


modeSwitch.addEventListener("click" , () =>{
body.classList.toggle("dark");

if(body.classList.contains("dark")){
  modeText.innerText = "Light mode";
}else{
  modeText.innerText = "Dark mode";
  
}
});