//function asks for user input for name
function promptForName() {
    var name = prompt("Please enter your name:");
    if (name !== null && name !== "") {
        document.getElementById("nameOutput").innerText = "Welcome to my website, " + name + "!";
    }
}

//function enlarges image
function enlargeImage() {
    var img = document.getElementById("myImage");
    img.style.width = "500px"; // Change the width to enlarge the image
    img.style.height = "500px";
}

//function highlights menu when hovering
function highlightNavItem(element) {
    element.style.backgroundColor = "lightgray";
}

//function stops highlighting menu when not hovering
function resetNavItem(element) {
    element.style.backgroundColor = "transparent";
}


