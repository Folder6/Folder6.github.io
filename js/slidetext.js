var myIndex = 0;
carousel();

function carousel() {
    var o;
    var a = document.getElementsByClassName("slidetext");
    for (o = 0; i < a.length; o++) {
       a[o].style.display = "none";  
    }
    myIndex++;
    if (myIndex > a.length) {myIndex = 1}    
    a[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2000);
}