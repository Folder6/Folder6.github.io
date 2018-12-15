var slideIndex = 0;
var maximum = 2;
var minimum = 0;
var i;
var slides = document.getElementsByClassName("slidetext");
var slides1 = document.getElementsByClassName("slideshow");; 

$(".slidetext").css('display','none');
$(".slideshow").css('display','none');


var randomnumber1;
var randomnumber2;

showSlides();

function showSlides() {

    randomnumber1 = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

   // run this loop until randomnumber1 is different than randomnumber2
    do {
        randomnumber2 = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    } while(randomnumber1 === randomnumber2);

   console.log(randomnumber1 + "," + randomnumber2);

    $(".slidetext").css('display','none');
    $(".slideshow").css('display','none');

    slides[randomnumber1].style.display = "block";

    slides1[randomnumber2].style.display = "block";

    setTimeout(showSlides, 2000); // Change image every 2 seconds
}