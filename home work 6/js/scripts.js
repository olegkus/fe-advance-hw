
keyTrainer = new Object();
keyTrainer.chars = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
keyTrainer.charCount = 0;
keyTrainer.task = [];
keyTrainer.userInput = '';
keyTrainer.userErrors = 0;



keyTrainer.setCharCount = function(){
    let correct = false;
    while (!correct) {
        let number = prompt('Введите количество букв')
        correct = this.checkPositivInteger(number);
        if (correct) {
            this.charCount = number;
        }
    };
};



keyTrainer.checkPositivInteger = function(num){
    if (num%1 == 0 && num > 0) {
        return true;
    }
    return false;
};



keyTrainer.createTask = function(){
    let data = [];
    for (let i = 0; i < this.charCount; i++) {
        let index = Math.floor(Math.random() * this.chars.length);
        console.log(index);
        let letter = this.chars[index];
        data.push(letter);        
    };

    this.task = data;
};



keyTrainer.startTask = function(){
    this.userInput = prompt(`Повторите : ${keyTrainer.task.join('')}`);
};



keyTrainer.checkTask = function() {
    let biggerLenghts = Math.max(this.task.length, this.userInput.length);

    for (let index = 0; index < biggerLenghts; index++) {
        if (this.task[index] != this.userInput[index]) {
            this.userErrors += 1;
        };
    };

    if (this.userErrors == 0) {
        alert(`Поздравляем! Вы не допустили ошибок`);
    }
    else {
        alert(`Вы допустили ${this.userErrors} ошибок`);
    };
};



function run() {
    keyTrainer.setCharCount();
    keyTrainer.createTask();
    keyTrainer.startTask();
    keyTrainer.checkTask();
};


run();






