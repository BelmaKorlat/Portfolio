var krugic = document.getElementsByClassName("circle2");
document.onmousemove = function () {
    var x = event.clientX * 50 / window.innerWidth + "%";
    var y = event.clientY * 50 / window.innerHeight + "%";

    for (var i = 0; i < 2; i++) {
        krugic[i].style.left = x;
        krugic[i].style.top = y;
        krugic[i].style.transform = "translate(" + x + ", " + y + ")";
    }
}

function resetPage() {
    // Add your code here to reset the page to its initial state
    // For example, you can clear form inputs, reset variables, etc.
    // Here, we are just reloading the page for demonstration purposes.
    location.reload();
}

// Get a reference to the reset button
var reset = document.getElementsByClassName("circle1");

// Add an onclick event handler to the button
reset.onclick = resetPage;