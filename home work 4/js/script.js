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
    
}