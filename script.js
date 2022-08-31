let order = [];
let clickerOrder = [];
let score = 0;

const blue = document.querySelector('.blue');
const yellow = document.querySelector('.yellow');
const red = document.querySelector('.red');
const green = document.querySelector('.green');



let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickerOrder = [];

    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
};




let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    }, number);
};





let checkOrder = () => {
    for (let i in clickerOrder) {
        if (clickerOrder[i] != order[i]) {
            loseGame();
            break
        }
    }
    if (clickerOrder.length == order.length) {
        alert(`Pontuação: ${score}\nNext Level!`);
        nextLevel();
    }
};

let click = (color) => {
    clickerOrder[clickerOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250)
};


let createColorElement = (color) => {
    if (color == 0) {
        return blue;
    }
    else if (color == 1) {
        return yellow;
    }
    else if (color == 2) {
        return red;
    }
    else if (color == 3) {
        return green;
    }
};

let nextLevel = () => {
    score++;
    shuffleOrder();
}

let loseGame = () => {
    alert(`Pontuação: ${score}\nYou Lose!\nClick to Restart`)
    order = [];
    clickerOrder = [];

    playGame();
}

let playGame = () => {
    alert(`Good Luck!`)
    score = 0;

    nextLevel();
};

blue.onclick = () => click(0);
yellow.onclick = () => click(1);
red.onclick = () => click(2);
green.onclick = () => click(3);

playGame();