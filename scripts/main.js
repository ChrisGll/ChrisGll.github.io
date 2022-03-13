let myImage = document.querySelector('img');

let oldPath = 'images/potassium-aliments.jpeg'
let newPath = 'images/bottle-dangerous-liquid-poison.jpg'

myImage.onclick = function () {
    if (myImage.getAttribute('src') === oldPath) {
        myImage.setAttribute('src', newPath);
    } else {
        myImage.setAttribute('src', oldPath);
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
        sessionStorage.setItem('name', myName);
        myHeading.textContent = 'Spot the food, ' + myName;
    }
}

if (!sessionStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = sessionStorage.getItem('name');
    myHeading.textContent = 'Spot the food, ' + storedName;
}

myButton.onclick = function () {
    setUserName();
}