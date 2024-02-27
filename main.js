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

function highlightNavItem(element) {
    element.style.backgroundColor = "lightgray";
}

function resetNavItem(element) {
    element.style.backgroundColor = "transparent";
}

function displayDropdown(element) {
    var dropdownContent = element.getElementsByClassName("dropdown-content")[0];
    dropdownContent.style.display = "block";
}

