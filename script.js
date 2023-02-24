const firstName = document.getElementById("fname")

firstName.addEventListener("input", (event)=>{
  if(firstName.validity.patternMismatch){
    firstName.setCustomValidity("Name should contane at least 2 characters")
  }
  else{
    firstName.setCustomValidity("")
  }
})


const firstPass = document.getElementById("password");
const secondPass = document.getElementById("password2");

secondPass.addEventListener("input", (event)=>{
  let firstPassValue = firstPass.value;
  let secondPassValue = secondPass.value
      if(firstPassValue !== secondPassValue){ 
      secondPass.style.borderColor = "purple";
      secondPass.classList.add("wrong-pass");
      secondPass.setCustomValidity("Passwords are not the same")
    }
    else{ 
      secondPass.style.borderColor = "green";
      secondPass.classList.remove("wrong-pass");
      secondPass.classList.add("match-pass");
       secondPass.setCustomValidity("");
    }
    /* 
    
    else if(firstPass.validity.patternMismatch==false && firstPass.value == secondPass.value){
      secondPass.style.borderColor = "green";
      secondPass.classList.add("match-pass");
      secondPass.setCustomValidity("")
      firstPass.setCustomValidity("")
    }
    else{
       firstPass.setCustomValidity("")
    } */
})