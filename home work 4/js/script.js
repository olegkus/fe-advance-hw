const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

function addKeyboardLayout(alphabet) {
    
    let keyboard = [[],[],[]];

    for (let i = 0; i < 12; i++) {
        keyboard[0].push(alphabet[i]);
    } 
        
    for (let i = 12; i < 23; i++) {
        keyboard[1].push(alphabet[i])
    }

    for (let i = 23; i < 33; i++) {
        keyboard[2].push(alphabet[i])
    }
    return keyboard;
};

function getRandCharInRow(row) {
       
        let k = addKeyboardLayout(alphabet);
        let lettersCount = k[row].length;
        let index = Math.floor(Math.random() * lettersCount);
        let letter = k[row][index];
    return letter;
   };

function getRandCharInAlph() {

    let row = Math.floor(Math.random()*3);
    let letter = getRandCharInRow(row);
    return letter;
    
};


// let row = prompt(`row number from 0 to 2`);
// let integerRow = parseInt(row);
// if (integerRow ^ 0 === integerRow && integerRow >= 0 && integerRow <= 2)
// {
//     alert(getRandCharInRow(integerRow));
// }else alert('False number');


