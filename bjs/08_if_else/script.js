// рабочие переменные
let gameRun = true;

const orderNumberField = document.querySelector('#orderNumberField');
let orderNumber;
const answerField = document.querySelector('#answerField');

let minValue;
let maxValue;
let answerNumber;

const fieldCopyMin = document.querySelector('#duplicateFieldMin');
const fieldCopyMax = document.querySelector('#duplicateFieldMax');

// замена исходного alert дублированием вводимого текста
document.querySelector("#minValue").addEventListener('input', 
  function (event) {
    fieldCopyMin.textContent = event.target.value;
})
document.querySelector("#maxValue").addEventListener('input', 
  function (event) {
    fieldCopyMax.textContent = event.target.value;
})
// кнопка старт
document.querySelector("#btnStart").addEventListener('click', function() {
  
  // получение введённых данных и их проверка
  minValue = Number(document.querySelector("#minValue").value);
  maxValue = Number(document.querySelector("#maxValue").value);
  valuesCheck();

  answerNumber = Math.floor((minValue + maxValue) / 2);
// начало игры и вывод первого вопроса
  orderNumber = 1;
  
  gameRun = true;
  orderNumberField.innerText = orderNumber;
  answerField.innerText = `Вы загадали число ${letters(answerNumber)}?`;
})
// конец 

// функция проверки допустимости значений
function valuesCheck () {
switch (isNaN(minValue) || minValue) {
  case true:
    minValue = 0;
    break;
    default:
      minValue = minValue < -999 ? -999 : minValue;
}
switch (isNaN(maxValue) || maxValue) {
  case true:
    maxValue = 100;
    break;
    default:
      maxValue = maxValue > 999 ? 999 : maxValue;
}
}
// в виду особенностей данной реализации проверка на NaN не требуется
// я оставила её чтобы продемонстрировать, что могу это написать, как и требовалось в задании
// конец функции

//функция текстового представления чисел
function letters () {
  const oneToTen = ["один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять", "десять"];

  const elevenToNineteen = ["одиннадцать", "двенадцать", "тринадцать", "четырнадцать", "пятнадцать", "шестнадцать", "семнадцать", "восемнадцать", "девятнадцать"];

  let twentyToNinety = ["двадцать", "тридцать", "сорок", "пятьдесят", "шестьдесят", "семьдесят", "восемьдесят", "девяносто"];

  let hundreds = ["сто","двести","триста", "четыреста", "пятьсот", "шестьсот", "семьсот", "восемьсот", "девятьсот"];

  let textAnswerNumber;

  let firstRank;
  let secondRank; 
  let thirdRank;

// для отрицательных чисел
let functAnswerNumber = Math.abs(answerNumber); 
let minusSign = (answerNumber < 0) ? 'минус' : '';

  //числа 10-19
  if(functAnswerNumber > 10 && functAnswerNumber < 20) {
      textAnswerNumber = elevenToNineteen[functAnswerNumber%10 - 1];
  }
  //остальные числа
  else { 
      if(functAnswerNumber === 0) {textAnswerNumber = 0}
      thirdRank = hundreds[(functAnswerNumber-functAnswerNumber%100)/100 - 1];

      // отключённый участок
      // answerNumber < 0 ? 
      // secondRank = twentyToNinety[(functAnswerNumber%100-functAnswerNumber%10)/10-1] :

      secondRank = twentyToNinety[(functAnswerNumber%100-functAnswerNumber%10)/10 - 2];

      firstRank = oneToTen[functAnswerNumber%10-1];
      
      textAnswerNumber = `${thirdRank === undefined ? '' : thirdRank} ${secondRank === undefined ? '' : secondRank} ${firstRank === undefined ? '' : firstRank}`;
  }
  // ноль записывается как 0 и никак иначе
  if(functAnswerNumber === 0) { 
      return 0;
  }

  // отключённый участок
  // if(functAnswerNumber < 0) 
  //   textAnswerNumber =  textAnswerNumber * -1 + 'минус' + '';
  
  // ограничение длины 
  // в последствии можно увеличить значение допустимой длины
  // 20 стоит по требованию задания
  else {
      return textAnswerNumber.length <= 20 ? minusSign + " " + textAnswerNumber : answerNumber;
  }
}
// конец функции текстового представления чисел

// кнопка сначала
document.querySelector('#btnRetry').addEventListener('click', (event) => {
    minValue = Number(document.querySelector("#minValue").value);
    maxValue = Number(document.querySelector("#maxValue").value);
    valuesCheck();
  
    answerNumber = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    gameRun = true;
    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${letters(answerNumber)}?`;
})

// кнопка больше
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
            minValue = answerNumber + 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.floor(Math.random() * 4);
            let textAnswer = letters(answerNumber);
                if (phraseRandom == 1){
                    answerPhrase = `Вы загадали число ${textAnswer}?`;
                  } else if (phraseRandom == 2) {
                    answerPhrase = `Наверное, это число ${textAnswer}...`;
                  } else if (phraseRandom == 3) {
                    answerPhrase = `Да это легко! Вы загадали ${textAnswer}?`;
                  } else {
                    answerPhrase = `Это ${textAnswer}? Правда ведь?`;
                  }
                  answerField.innerText = answerPhrase;
        }
    }
})

// кнопка меньше
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
            maxValue = answerNumber - 1;
            answerNumber = Math.ceil((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round(Math.random() * 4);
            let textAnswer = letters(answerNumber);
                if (phraseRandom == 1){
                    answerPhrase = `Вы загадали число ${textAnswer}?`;
                  } else if (phraseRandom == 2) {
                    answerPhrase = `Наверное, это число ${textAnswer}...`;
                  } else if (phraseRandom == 3) {
                    answerPhrase = `Да это легко! Вы загадали ${textAnswer}?`;
                  } else {
                    answerPhrase = `Это ${textAnswer}? Правда ведь?`;
                  }
                  answerField.innerText = answerPhrase; 
                }
    }
})

// кнопка верно
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