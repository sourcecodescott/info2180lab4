var playerLose = false;

window.onload = function() {
    $("start").onclick = startGame;
    $("end").onmouseover = endGame;
    var b = $$("div#maze div.boundary");
    for (var i = 0; i < b.length; i++) {
        b[i].onmouseover = touchBoundary;
    }
};

function touchBoundary() {
    playerLose = true;
    var b = $$("div#maze div.boundary");
    for (var i = 0; i < b.length; i++) {
        b[i].addClassName("youlose");
    }
}

function startGame() {
    playerLose = false;
    var b = $$("div#maze div.boundary");
    for (var i = 0; i < b.length; i++) {
        b[i].removeClassName("youlose");
    }
}

function endGame() {
    if (playerLose) {
        alert("Sorry, You Lost.");
    } else {
        alert("You Win!");
    }
}






