const firstStr = 'qwertyuiop[]';
const secondStr = "asdfghjkl;'";
const thirstStr = 'zxcvbnm,./';

const firstStrNumb = 12;
const secondStrNumb = 11;
const thirstStrNumb = 10;

let let1Str1 = firstStr.charAt(0);
let lastLetStr1 = firstStr.charAt(firstStrNumb - 1);
let let1Str2 = secondStr.charAt(0);
let lastLetStr2 = secondStr.charAt(secondStrNumb - 1);
let let1Str3 = thirstStr.charAt(0);
let lastLetStr3 = thirstStr.charAt(thirstStrNumb - 1);

let find1LetStr1 = firstStr.indexOf('[');
let find2LetStr1 = firstStr.indexOf(']');
let find1LetStr2 = secondStr.indexOf('[');
let find2LetStr2 = secondStr.indexOf(']');
let find1LetStr3 = thirstStr.indexOf('[');
let find2LetStr3 = thirstStr.indexOf(']');

alert(`  Первый символ первой строки  = ${let1Str1}
  Последний символ первой строки = ${lastLetStr1}
  Первый символ второй строки = ${let1Str2}
  Последний символ второй строки = ${lastLetStr2}
  Первый символ третьей строки = ${let1Str3}
  Последний символ третьей строки = ${lastLetStr3}
  Результат поиска "[" в первой строке  = ${find1LetStr1}
  Результат поиска "]" в первой строке = ${find2LetStr1}
  Результат поиска "[" во второй строке = ${find1LetStr2}
  Результат поиска "]" во второй строке = ${find2LetStr2}
  Результат поиска "[" в третьей строке = ${find1LetStr3}
  Результат поиска "]" в третьей строке = ${find2LetStr3}`);
