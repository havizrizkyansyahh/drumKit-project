let drums = document.querySelectorAll(".drum");

drums.forEach(drum => {
    drum.addEventListener("click", function () {
        const keyChar = this.textContent;
        makeSound(keyChar);
        buttonAnimation(keyChar);
    });
}) 

document.addEventListener("keydown", function (event) {
    const keyPressed = event.key;
    makeSound(keyPressed);
    buttonAnimation(keyPressed);
});

const makeSound = (key)=> {
    let audio;
    switch (key) {
        case "w" :
            audio = new Audio("./sounds/tom-1.mp3");
            break;
        case "a" :
            audio = new Audio("./sounds/tom-2.mp3");
            break;
        case "s" :
            audio = new Audio("./sounds/tom-3.mp3");
            break;
        case "d" :
            audio = new Audio("./sounds/tom-4.mp3");
            break;
        case "j" :
            audio = new Audio("./sounds/snare.mp3");
            break;
        case "k" :
            audio = new Audio("./sounds/crash.mp3");
            break;
        case "l" :
            audio = new Audio("./sounds/kick-bass.mp3");
            break;
    }

    audio.play();
}

function buttonAnimation (currentKey) {
    let activeBtn = document.querySelector("." + currentKey);
    activeBtn.classList.add("pressed");

    setTimeout(function () {
        activeBtn.classList.remove("pressed");
    }, 150);
}