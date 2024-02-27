function promptForName() {
    var name = prompt("Please enter your name:");
    if (name !== null && name !== "") {
        document.getElementById("nameOutput").innerText = "Hello, " + name + "!";
    }
}

function enlargeImage() {
    var img = document.getElementById("myImage");
    img.style.width = "300px"; // Change the width to enlarge the image
}


