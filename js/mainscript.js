let menubar = document.querySelector('#menu-btn');
let navbarList = document.querySelector(".navbar");

let todolistThings = document.getElementById("outerthings");
let galleryImgs = document.getElementById("outergallery");


let uname = document.querySelector(".un");
let uemail = document.querySelector(".ue");
let utel = document.querySelector(".ut");
let umsg = document.querySelector(".um");

let displayErroMsg = document.querySelector(".displayErrorMsg");
let inquiryForm = document.getElementById("inquiryForm");
let bookingForm = document.getElementById("bookingForm");


// menubar.addEventListener("click", function(){
//     menubar.classList.toggle("fa fa-times")
// })


menubar.addEventListener("click", function(){
    menubar.classList.toggle('fa-times');
    navbarList.classList.toggle("navbarBox");
});


window.onscroll =  ()=>{
    if(window.scrollY > 20){
        menubar.classList.remove('fa-times');
        navbarList.classList.remove("navbarBox");
    }
}

// things to do section
function todoListFunc(){
  artsList.map((artlist)=>{
    todolistThings.innerHTML += `
        <div class="innerthings">
          <h3>${artlist.title}</h3>
          <p>${artlist.content}</p>
        </div>
    `
  });
}
todoListFunc();

// Gallery section
function displayImagesFunc(){
allImages.map((singleImage)=>{
  galleryImgs.innerHTML += `
      <div class="innergallery">
        <img src="${singleImage.imageSrc}" alt="${singleImage.alt}">
      </div>
  `
  })
}
displayImagesFunc();


// Initialize swiper
var swiper = new Swiper(".outerhome", {
    loop:true,
    effect: "coverflow",
    grabCursor: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  // scrolling animation

window.addEventListener("scroll", reveal);

function reveal() {
    var reveals = document.querySelectorAll(".innerthings");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
}


window.addEventListener("scroll", about);

function about() {
    var abouts = document.querySelectorAll(".innerabout");
    for (var i = 0; i < abouts.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = abouts[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        abouts[i].classList.add("active");
      } else {
        abouts[i].classList.remove("active");
      }
    }
}

window.addEventListener("scroll", gallery);

function gallery(){
  var galleryimgs = document.querySelectorAll('.innergallery');
  for(let i=0; i<galleryimgs.length; i++){
    let windowHeight = window.innerHeight;
    let elementTop = galleryimgs[i].getBoundingClientRect().top;
    let elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      galleryimgs[i].classList.add("active");
    } else {
      galleryimgs[i].classList.remove("active");
    }

  }
}

function submitBooking(){
  setTimeout( function(){ 
    bookingForm.reset();
    // displayErroMsg.innerHTML = `<b style="color:green;text-align:center">Thank You! We'll Contact You Soon!</b>`
  }, 500);
}

function submitForm(){
  checkInputs();
}

function checkInputs(){
  let errorMsgs = [];
  let mailformat = /^[A-Za-z0-9+_.-]+@(.+)$/;
  let phoneno = /^\d{10}$/;


  if(uname.value === "" || uname.value == null){
    errorMsgs.push("Please Enter Your Name");
  }else if(uemail.value === "" || uemail.value == null){
    errorMsgs.push("Please Enter Your Email");
  }else if(!(uemail.value.match(mailformat))){
    errorMsgs.push("Please Enter a Valid Email Address");
  }else if(utel.value === "" || utel.value == null){
    errorMsgs.push("Please Enter Your Phone Number");
  }else if(!(utel.value.match(phoneno))){
    errorMsgs.push("Please Enter a Valid Phone Number");
  }
   else if(umsg.value === "" || umsg.value == null){
    errorMsgs.push("Please Enter Your Message");
  } else{
    successFunc();
  }

  if(errorMsgs.length > 0){
    displayErroMsg.innerHTML = errorMsgs;
  }
}

function successFunc(){
    setTimeout( function(){ 
        inquiryForm.reset();
        displayErroMsg.innerHTML = `<b style="color:green;text-align:center">Thank You! We'll Contact You Soon!</b>`
      }, 800);
    
  }


