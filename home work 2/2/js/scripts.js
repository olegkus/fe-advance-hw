// let resorts = {
//     'sharm' :15,
//     'hurgada':25,
//     'taba' : 6
// }

// let number = prompt('Введите количесвто туристов');
// if (number % 1 ==0 && number > 0){
//     let found = false;
//     let reserved = false;
//     for(let key in resorts){
//         if(number <= resorts[key]){
//             found = true;
//             if(confirm(`Есть место в группе ${key}. Согласны?`)){
//                 resorts[key] = resorts[key] - number;
//                 reserved = true;
//                 alert(`Спасибо! Резерв подтвержден`)
//                 break;
//             }         
//         }
//     }
//   if(!found){
//       alert(`Мест нет, сорри!`);
//   }
//   else if (!reserved) {
//       alert(`Предложения кончились!`);
//   }
// } else{
//     alert(`Вы ввели некоректное число`);
// }


// number1 = prompt(`Введите первую цифру`);
// number2 = prompt(`Введите вторую цифру`);
// let sum = 0;
//  if(typeof number1 == 'number', typeof number2 == 'number'){
//      function sumNumber() {
//          sum = number1 + number2
//          return alert(sum);

         
//      }
//  }else{
//      alert(`Ошибка`);
//  }



function sumLi(number1,number2) {
  if (typeof number1 == 'number', typeof number2 == 'number') {
      let sum = number1 + number2
      return sum;
    }else{
        return `fake`
    }
     
}




//  function getStr(name) {
//     if (typeof name == `string`) {
//         return `Ваше имя: ${name}`;
//     } else{
//         return `fake`
//     }
     
     
//  }

    // function getDesktop(device) {
    //     if(device < 1024){
    //         desktop = `mobile`
    //     }else{
    //         desktop = 'desktop'
    //     }
        
    // }