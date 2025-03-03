
//////// AUTO OPEN/CLOSE NAVBAR ////////

// edituvav gotova skripta od net:

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0px";
    
  } else {
    document.getElementById("navbar").style.top = "-100%";
  }
  prevScrollpos = currentScrollPos;
}

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  var b1 = document.getElementById("b1");
  var b2 = document.getElementById("b2");
  var b3 = document.getElementById("b3");

  if (x.style.height === "100vh") {

    // zatvori nav menu 
    x.style.height = "0px";
    
    // smeni go X-ot od hamburger menu 
    b2.style.borderColor = "var(--white)";
    b1.style.transform = "translateY(10px)";
    b3.style.transform = "translateY(-10px)";

  } else {
    // otvori nav menu 
    x.style.height = "100vh";

    //X od burger menu
    b2.style.borderColor = "transparent";
    b1.style.transform = "rotate(-45deg)";
    b3.style.transform = "rotate(45deg)";
  }
}



//////// DIV FOLLOW MOUSE //////////////////
// koristi external linknati skripti vo head 

var $circle = $('.follow');

function moveCircle(e) {
  TweenLite.to($circle, 0.3, {
    css: {
      left: e.pageX + 30,
      top: e.pageY + 30
    }
  });
}

$(window).on('mousemove', moveCircle);


///////////////////////////////////////////////
///// HERO BANNER BG RANDOM TRANSFORMS ///////
/////////////////////////////////////////////


var red = document.querySelector('#dl');
var blue = document.querySelector('#dd');


/////////////////////// TRANSLATE

function changer1() {

  var customx = Math.random() * -(150 - (-50)) - 50;
  var customy = Math.random() * -(150 - (-50)) - 50;

  //////

  red.style.setProperty('--custom-x', customx + 'px');
  red.style.setProperty('--custom-y', customy + 'px');
  //
  blue.style.setProperty('--custom-x', customx + 'px');
  blue.style.setProperty('--custom-y', customy + 'px');
}
setInterval(changer1, 1000);


////////////////////////// SCALE

function changer2() {

  var customsx = Math.random() * (200 - 50) + 50;
  var customsy = Math.random() * (200 - 50) + 50;
  ///////
  red.style.setProperty('--custom-sx', customsx + '%');
  red.style.setProperty('--custom-sy', customsy + '%');
  //
  blue.style.setProperty('--custom-sx', customsx + '%');
  blue.style.setProperty('--custom-sy', customsy + '%');
}
setInterval(changer2, 1250);

////////////////////////// ROTATE

function changer3() {

  var customr = Math.random() * (0 - 360);
  ////////
  red.style.setProperty('--custom-r', customr + 'deg');
  blue.style.setProperty('--custom-r', customr + 'deg');

}
setInterval(changer3, 1500);


// testimonials slider 

//ne raboti kako shto treba ama izgleda okej 🤫//

var moveL = 60;

function Larr() {

  var sliderL = document.querySelector("#testimonials-slider");

  sliderL.style.transform = "translateX( -" + moveL + "vw)";

  moveL = moveL + 60;

  if (moveL == 240) {
    moveL = 0;
  }
}

var moveR = -60;

function Rarr() {

  var sliderR = document.querySelector("#testimonials-slider");

  sliderR.style.transform = "translateX(" + moveR + "vw)";

  moveR = moveR - 60;

  if (moveR == -240) {
    moveR = 0;
  }
}


////////////////////////////////////////
// work section expand 
///////////////////////////////////////


var acc = document.getElementsByClassName("work-article");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    
    this.classList.toggle("hover-active");
    //za da go trgne hover efektot koga vishe e kliknato

    var panel = this.querySelector(".w-txt");
    var panel2 = this.querySelector(".work-article-img");
    var plusimg = this.querySelector("img");

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel2.style.maxHeight = null;
      plusimg.style.transform = "rotate(0deg)"

    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel2.style.maxHeight = panel2.scrollHeight + "px";
      //+100 zatoa shto mi ja seceshe slikata //
      plusimg.style.transform = "rotate(45deg)"
    } 
  });
}
