function promptForName() {
    var name = prompt("Please enter your name:");
    if (name !== null && name !== "") {
        document.getElementById("nameOutput").innerText = ", " + name + "!";
    }
}

function enlargeImage() {
    var img = document.getElementById("myImage");
    img.style.width = "500px"; // Change the width to enlarge the image
    img.style.height = "500px";
}


