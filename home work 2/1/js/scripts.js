let resorts = {
    1: 'taba',
    2: 'sharm',
    3: 'hurgada'
}

message = `Введите номер курорта :`;
for(let key in resorts){
    message = message + `    ${key}: ${resorts[key]} `
}
number = prompt(message);
exist = resorts.hasOwnProperty(number);
if(exist){
    alert(`Вы выбрали: ${resorts[number]}`)
} else {
    alert(`Вы выбрали не существующий у нас курорт`)
};