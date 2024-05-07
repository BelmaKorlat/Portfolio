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
    location.reload();
}


var reset = document.getElementsByClassName("circle1");

reset.onclick = resetPage;