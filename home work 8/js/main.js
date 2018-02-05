const buttons = Array.from(document.querySelectorAll("button"));
const keys = "qwertyuiop[]asdfghjkl;'zxcvbnm,./ ".split("");


const playSound = button => {
    let note = button.getAttribute('data-note');
    const audio = document.querySelector(`audio[data-note=${note}]`);
    audio.currentTime = 0;
    audio.play();
};



const findButton = (letter) => {
    if(letter == " "){
        letter = 'space';
    }
    let button;
    buttons.forEach(function (item, i, arr) {
        if(item.textContent == letter){
            button = item;
        }
    });
    return button;
};



const lightButton = (button) =>{
    button.classList.add("keyboard__btn--active");
    setTimeout(() => { button.classList.remove("keyboard__btn--active")},200);
};


const callback = function (param) {
    // 0. отсеиваем лишние клавиши
    let findKey = keys.findIndex((k) => k == param.key);
    if (findKey == -1){
        return;
    };
    
    // 1. Найти кнопку
    let button = findButton(param.key);
        
    // 2. Подсветить кнопку
    lightButton(button);
    
    // 3. Play sound
    if(document.getElementById('slideThree').checked == true)
    {
        playSound(button);
    }
};




window.addEventListener("keydown",callback);
