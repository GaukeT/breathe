var running = false;

window.addEventListener('load', function () {
    // getAnimation().style.animationPlayState = "running";
    console.log("hello world");
});

function play() {
    console.log("play")
    toggleState()
}

function toggleState() {
    running = !running;

    if (running) {
        getText().textContent = "Breathe";
        getAnimation().style.animationPlayState = "running";
    } else {
        getText().textContent = "Hold";
        getAnimation().style.animationPlayState = "paused";
    }
}

function getAnimation() {
    return document.querySelector(".animation");
}

function getText() {
    return document.querySelector(".text");
}

setInterval(play, 4000);