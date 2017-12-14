const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
let keyboard = 
[
    [alphabet[0], alphabet[1], alphabet[2], alphabet[3], alphabet[4], alphabet[5], alphabet[6], alphabet[7], alphabet[8], alphabet[9], alphabet[10], alphabet[11]],
    [alphabet[12], alphabet[13], alphabet[14], alphabet[15], alphabet[16], alphabet[17], alphabet[18], alphabet[19], alphabet[20], alphabet[21], alphabet[22]],
    [alphabet[23], alphabet[24], alphabet[25], alphabet[26], alphabet[27], alphabet[28], alphabet[29], alphabet[30], alphabet[31], alphabet[32]]
];


let hello = keyboard[1][5] + keyboard[0][2] + keyboard[1][8] + keyboard[1][8] + keyboard[0][8];
let javascript = keyboard[1][6] + keyboard[1][0] + keyboard[2][3] + keyboard[1][0] + keyboard[1][1] + keyboard[2][2] + keyboard[0][3] + keyboard[0][7] + keyboard[0][9] + keyboard[0][4];
let trainer = keyboard[0][4] + keyboard[0][3] + keyboard[1][0] + keyboard[0][7] + keyboard[2][5] + keyboard[0][2] + keyboard[0][3];
console.log(keyboard);