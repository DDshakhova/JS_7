let minValue = parseInt(prompt('Минимальное значение числа для игры','0'));
switch (isNaN(minValue) || minValue) {
  case true:
    minValue = 0;
    break;
    default:
      minValue = minValue < -999 ? -999 : minValue;
}
let maxValue = parseInt(prompt('Максимальное значение числа для игры','100'));
switch (isNaN(maxValue) || maxValue) {
  case true:
    maxValue = 100;
    break;
    default:
      maxValue = maxValue > 999 ? 999 : maxValue;
}
// (maxValue > 999) ? 
// maxValue = 999 :
// maxValue = maxValue + 0;
// (minValue < -999) ? 
// minValue = -999 :
// minValue = minValue + 0;
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);

let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.querySelector('#orderNumberField');
const answerField = document.querySelector('#answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

document.querySelector('#btnRetry').addEventListener('click', (event) => {
   let minValue = parseInt(prompt('Задайте новое минимальное значение числа для игры','0'));
    switch (isNaN(minValue) || minValue) {
      case true:
        minValue = 0;
        break;
        default:
          minValue = minValue < -999 ? -999 : minValue;
    }
   let maxValue = parseInt(prompt('Задайте новое максимальное значение числа для игры','100'));
   switch (isNaN(maxValue) || maxValue) {
    case true:
      maxValue = 100;
      break;
      default:
        maxValue = maxValue > 999 ? 999 : maxValue;
  }
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    gameRun = true;
    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${answerNumber}?`;
})

document.querySelector('#btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round(Math.random() * 4);
                if (phraseRandom == 1){
                    answerPhrase = `Похоже, Вы лишний раз нажали на кнопку\n\u{1F634}`;
                  } else if (phraseRandom == 2) {
                    answerPhrase = `Я сдаюсь..\n\u{1F92F}`;
                  } else if (phraseRandom == 3) {
                    answerPhrase = `Вы загадали неправильное число!\n\u{1F914}`;
                  } else {
                    answerPhrase = `Кажется, Вы пытаетесь меня обмануть \n\u{1F62D}`;
                  }
                  answerField.innerText = answerPhrase;
                  gameRun = false; 
            } 
        else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round(Math.random() * 4);
                if (phraseRandom == 1){
                    answerPhrase = `Вы загадали число ${answerNumber}?`;
                  } else if (phraseRandom == 2) {
                    answerPhrase = `Наверное, это число ${answerNumber}...`;
                  } else if (phraseRandom == 3) {
                    answerPhrase = `Да это легко! Вы загадали ${answerNumber}?`;
                  } else {
                    answerPhrase = `Это ${answerNumber}? Правда ведь?`;
                  }
                  answerField.innerText = answerPhrase;
        }
    }
})

document.querySelector('#btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round(Math.random() * 4);
            if (phraseRandom == 1){
                answerPhrase = `Похоже, Вы лишний раз нажали на кнопку \n\u{1F634}`;
              } else if (phraseRandom == 2) {
                answerPhrase = `Я сдаюсь..\n\u{1F92F}`;
              } else if (phraseRandom == 3) {
                answerPhrase = `Вы загадали неправильное число!\n\u{1F914}`;
              } else {
                answerPhrase = `Кажется, Вы пытаетесь меня обмануть \n\u{1F62D}`;
              }
              answerField.innerText = answerPhrase;
              gameRun = false; 
        } else {
            maxValue = answerNumber;
            // maxValue = (answerNumber === 0) ?
            // answerPhrase = (phraseRandom === 1) ?
                // `Вы загадали неправильное число!\n\u{1F914}` :
                // `Я сдаюсь..\n\u{1F92F}`:
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }
    }
})


document.querySelector('#btnEqual').addEventListener('click', function () {
    if (gameRun){
        const phraseRandom = Math.round(Math.random() * 4);
        if (phraseRandom == 1){
            answerPhrase = `Я всегда угадываю\n\u{1F60E}`;
          } else if (phraseRandom == 2) {
            answerPhrase = `Меня не обыграть\n\u{1F916}`;
          } else if (phraseRandom == 3) {
            answerPhrase = `Ура! Попробуем ещё раз?\n\u{1F607}`;
          } else {
            answerPhrase = `Это было весело\n\u{1F929}`;
          }
          answerField.innerText = answerPhrase;
        gameRun = false;
    }
})

