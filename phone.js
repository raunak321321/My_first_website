para = document.getElementById("paraforjs");
function myFunction(x) {
    if (x.matches) { // If media query matches
      para.style.display = "none";
    } 
    else{
        para.style.display="block"
    }
  }
  
  let x = window.matchMedia("(max-width: 1147px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes



para1 = document.getElementById("paraforjs1");
function myFunction1(x1) {
    if (x1.matches) { // If media query matches
      para1.style.display = "none";
    } 
    else{
        para1.style.display="block"
    }
  }
  
  let x1 = window.matchMedia("(max-width: 830px)")
  myFunction1(x1) // Call listener function at run time
  x1.addListener(myFunction1) // Attach listener function on state changes