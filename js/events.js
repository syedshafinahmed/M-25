console.log("External File");

// Option 2 for event handler 
function makeYellow() {
    document.body.style.backgroundColor = 'yellow';
}
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// Option 3 for event handler 
const btnMakeBlue = document.getElementById('btn-make-blue');
// console.log(btnMakeBlue);
btnMakeBlue.onclick = function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// Option 3.1 for event handler 
const btnMakePurple = document.getElementById('btn-make-purple');
btnMakePurple.onclick = makePurple;
function makePurple() {
    document.body.style.backgroundColor = 'purple';
}


// Option 4 addEventListener
// document.getElementbyId.addEventListener('event type', handler)
document.getElementById('btn-make-gold').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod';
})