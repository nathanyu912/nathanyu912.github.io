function promptForName() {
    var name = prompt("Please enter your name:");
    if (name !== null && name !== "") {
        document.getElementById("nameOutput").innerText = "Hello, " + name + "!";
    }
}



