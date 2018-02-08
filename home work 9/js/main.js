const lang = {
    en: "qwertyuiop[]asdfghjkl;'zxcvbnm,./ "
};


const keyboardTemplade = document.querySelector("#create-keyboard").textContent.trim();
const keyTempladeFunc = _.template(keyboardTemplade);
const resultKeyboard = keyTempladeFunc(lang);

const container = document.querySelector(".KeysContainer");
container.innerHTML = resultKeyboard;

const buttons = Array.from(document.querySelectorAll(".keyboard__btn"));



// const playSound = button => {
//     let note = button.getAttribute('data-note');
//     const audio = document.querySelector(`audio[data-note=${note}]`);
//     audio.currentTime = 0;
//     audio.play();
// };


const findButton = (letter) => {
       // if (letter == " ") {
    //     letter = 'space';
    // }

    let button;
    buttons.forEach(function (item, i, arr) {
        if (item.textContent == letter) {
            button = item;
        }
    });
    return button;
};


const lightButton = (button) => {
    
    button.classList.add("key-active");
    setTimeout(() => { button.classList.remove("key-active") }, 200);
};


const callback = function (param) {
    // 0. отсеиваем лишние клавиши
    let findKey = lang.en.split("").findIndex((k) => k == param.key);
    if (findKey == -1) {
        return;
    };

    // 1. Найти кнопку
    let button = findButton(param.key);

    // 2. Подсветить кнопку
    lightButton(button);

    // 3. Play sound
    // if (document.getElementById('slideThree').checked == true) {
    //     playSound(button);
    // }
};


window.addEventListener("keydown", callback);