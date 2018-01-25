const keyEn = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
const keyRu = "йцукенгшщзхъфывапролджэячсмитьбю.";
const keyUa = "йцукенгшщзхїфівапролджєячсмитьбю.";
const keyboard = {
        layouts : {},
        lengs : [],
        currentLang : ''
};

function fillKeyboard(lname,letters){
    let keys = {topRow:[],middleRow:[],buttonRow:[]};

    for (let i = 0; i < 12; i++) {
        keys.topRow.push(letters[i]);  
        // keyboard[0].push(alphabet[i]);
    }

    for (let i = 12; i < 23; i++) {
        keys.middleRow.push(letters[i]);
    }

    for (let i = 23; i < 33; i++) {
       keys.buttonRow.push(letters[i]);
    }
    
    keyboard.layouts[lname] = keys;
    keyboard.lengs.push(lname);

};

function getRandCharInRow(k,rowName) {
    let lettersCount = k[rowName].length;
    let index = Math.floor(Math.random() * lettersCount);
    let letter = k[rowName][index];
    return letter;
};

function getRandCharInAlph(lname) {
    let k = keyboard.layouts[lname];
    let rows = Object.keys(k);
    let rowNumber = Math.floor(Math.random() * rows.length);
    let rowName = rows[rowNumber];
    let letter = getRandCharInRow(k, rowName);
    return letter;
    
};


fillKeyboard('en',keyEn);
fillKeyboard('ru',keyRu);
fillKeyboard('ua',keyUa);


let worked = false;
do {    
    let a = prompt(`Выберите язык : 0-"en",1-"ru",2-"ua"`);
    switch (a) {
        case '0': alert(getRandCharInAlph('en'));
            worked = true; 
            break;
        case '1': alert(getRandCharInAlph('ru'));
            worked = true;
            break;
        case '2' : alert(getRandCharInAlph('ua'));
            worked = true;
            break;
        case null:
            worked = true;
            break;
        default:
            break;

    }
} while (!worked);


