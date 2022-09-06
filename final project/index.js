function DarkMode() {
  let icon = document.getElementById("toggleDark");
  let body = document.body;
  icon.classList.toggle("bi-moon");

  if (icon.classList.toggle("bi-brightness-high-fill")) {

    body.style.backgroundColor = "rgb(0 44 44)";
   
  
    document.getElementById("toggleDark").style.color = "WHITE";
  } else {
    body.style.backgroundColor =  "rgb(5, 26, 26)";
    
   
    document.getElementById("toggleDark").style.color = "BLACK";
  }
}