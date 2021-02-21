var hamButton = document.getElementById("ham-options");

function hamburger() {
    if (hamButton.style.display === "none") {
        hamButton.style.display = "grid";
    }else{
        hamButton.style.display = "none";
    }

    // if (hamButton.className === "nav-options") {
    //     hamButton.className.replace("ham-options");
    // }else{
    //     hamButton.className.replace("nav-options");
    // }
}

// var onOffSwich = document.getElementsByClassName("on")

// function hamburger() {
    
// }