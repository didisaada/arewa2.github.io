//GET DATA
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message= document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");

// Validate data

function validateForm(){
    let errorFlag = false;
    
    clearMessages();

if(nameInput.value.length < 1){
    errorNodes[0].innerText ="Name cannot be blank";
    nameInput.classList.add("error-border");
    errorFlag = true;
}
if(!emailIsValid(email.value)){
    errorNodes[1].innerText ="Invalid email address";
    email.classList.add("error-border");
    errorFlag = true;
}

if(message.value.length < 1){
    errorNodes[2].innerText ="Please enter message";
    message.classList.add("error-border");
    errorFlag = true;
}

if(!errorFlag){
    alert("message sent successfully!")
    clearForm();
}
}

// Clear error/success message
function clearMessages(){
    for(let i =0; i < errorNodes.length; i++){
        errorNodes[i].innerText ="";
    }
    success.innerText = "";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");

}

//clear form fields
function clearForm(){
   nameInput.value = "";
   email.value="";
   message.value = "";

}
// check if email is valid
function emailIsValid(email){
    let pattern = /\S+@\S.\S+/;
    return pattern.test(email);
}


//count down page
var countDownDate = new Date("Oct 1, 2023 00:00:00").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours= Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 ));
var minutes= Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60 ));
var seconds= Math.floor((distance % (1000 * 60 )) / 1000);
    
   document.getElementById("countdown").innerHTML = days + "d " + hours + "h " +
   minutes + "m " + seconds +"s ";

      if(distance < 0){
      clearInterval(x);

      document.getElementById("countdown").innerHTML = "EXPIRED";
      }

},1000);
