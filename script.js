// Welcome Message
window.onload = function () {
    console.log("Welcome to CareConnect Hospital");
};

// Appointment Form
const forms = document.querySelectorAll("form");

forms.forEach(function(form){

form.addEventListener("submit",function(e){

e.preventDefault();

alert("Your request has been submitted successfully!");

});

});

// Login Button
const loginBtn = document.querySelector(".btn-primary");

if(loginBtn){

loginBtn.addEventListener("click",function(){

console.log("Login Button Clicked");

});

}

// Back to Top Button
window.addEventListener("scroll",function(){

if(window.scrollY>200){

document.querySelector(".navbar").style.boxShadow="0 5px 15px rgba(0,0,0,.3)";

}else{

document.querySelector(".navbar").style.boxShadow="none";

}

});

// Card Animation
const cards=document.querySelectorAll(".card");

cards.forEach(function(card){

card.addEventListener("mouseenter",function(){

card.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",function(){

card.style.transform="translateY(0px)";

});

});