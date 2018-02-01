const keyboard = {
    topRow : "qwertyuiop[]",
    middleRow : "asdfghjkl;'",
    bottomRow : "zxcvbnm,./",
};

createLayout = function() {
    let keyboardDiv = document.createElement('div');
    keyboardDiv.classList.add('keyboard');
    document.body.appendChild(keyboardDiv);

    let rows = Object.getOwnPropertyNames(keyboard);
        for (const row of rows) {   
            let rowDiv = document.createElement('div');
            rowDiv.classList.add('row');
            keyboardDiv.appendChild(rowDiv);
            let letters = keyboard[row];
            for (let index = 0; index < letters.length; index++) {
                let letterDiv = document.createElement('div');
                letterDiv.classList.add('letter');
                letterDiv.textContent = letters[index];
                rowDiv.appendChild(letterDiv);                 
            };
        };
    };


    
createLayout();

