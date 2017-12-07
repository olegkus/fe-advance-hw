let resorts = {
    'sharm' :15,
    'hurgada':25,
    'taba' : 6
}

let number = prompt('Введите количесвто туристов');
if (number % 1 ==0 && number > 0){
    let found = false;
    let reserved = false;
    for(let key in resorts){
        if(number <= resorts[key]){
            found = true;
            if(confirm(`Есть место в группе ${key}. Согласны?`)){
                resorts[key] = resorts[key] - number;
                reserved = true;
                alert(`Спасибо! Резерв подтвержден`)
                break;
            }         
        }
    }
  if(!found){
      alert(`Мест нет, сорри!`);
  }
  else if (!reserved) {
      alert(`Предложения кончились!`);
  }
} else{
    alert(`Вы ввели некоректное число`);
}



